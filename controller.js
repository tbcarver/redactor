
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

	model.redactedText = req.body.document;

	res.render("home.template.hbs", model);
}

module.exports.initialize = initialize;