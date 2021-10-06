
const express = require("express");
const expressHandlebars  = require("express-handlebars");
const controller = require("./controller");

const app = express();
const port = 3000;

const handlebars = expressHandlebars.create({
	extname: ".hbs",
	partialsDir: "",
	defaultLayout: "",
	helpers: {},
});

app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");
app.set("views", "./");

app.use(express.json());
app.use(express.urlencoded());

app.use("/vendor", express.static("node_modules"));
controller.initialize(app);

app.listen(port, function() {
	console.log(`Server listening on port ${port}. http://localhost:${port}`);
});