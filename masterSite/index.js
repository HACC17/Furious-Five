"use strict"; /* eslint-env node */ /* global */ /* eslint no-warning-comments: [1, { "terms": ["todo", "fix", "help"], "location": "anywhere" }] */
var debug = false;

// Load Node Modules & Custom Modules
var express = require("express"),
	app = express(),
	server = app.listen(process.env.PORT || (process.argv[2] || 8000), function expressServerListening () {
		console.log(server.address());
	}),
	io = require("socket.io"),
	listener = io.listen(server),
	pugStatic = require("pug-static"),
	utils = require("./utils.js");

// Express Middleware
var router = require("./app/routes.js");
// app.use("/", router);
app.use(express.static(__dirname + "/dist"));
app.use(pugStatic(__dirname + "/views"));

// Socket.io Control
listener.sockets.on("connection", function connectionDetected (socket) {
	socket.on("refreshRequest", function processRefreshRequest (options) {
		socket.emit("refreshResponse", {});
	});
});