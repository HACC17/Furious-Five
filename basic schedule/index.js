var express = require("express"),
	pugStatic = require("pug-static"),
	app = express(),
	logger = require("morgan");

app.use(pugStatic("public"));
app.use(express.static("public"));
app.use(logger("dev"));

app.listen(8000, function() {
	console.log("Connected at port 8000");
});