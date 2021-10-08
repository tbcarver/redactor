
const redactor = require("./redactor");

function initialize(app) {

	app.get("/", getHome);
	app.post("/", postHome);
}

function getHome(req, res, next) {

	var model = { title: "Redactor" };

	res.render("home.template.hbs", model);
}

function postHome(req, res, next) {

	var model = { title: "Redactor" };

	model.keywordsPhrases = req.body.keywordsPhrases;
	model.document = req.body.document;
	model.redactedText = redactor.redact(req.body.keywordsPhrases, req.body.document);

	res.render("home.template.hbs", model);
}

module.exports.initialize = initialize;