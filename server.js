const express = require("express");

const projectsRouter = require("./api/projectsRouter");
const actionsRouter = require("./api/actionsRouter");
const contextsRouter = require("./api/contextsRouter");

const server = express();

server.get("/", (req, res) => {
	res.send(`<h2>NodeDB Sprint Challenge</h2>`);
});

server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);
server.use("/api/contexts", contextsRouter);

server.use(errorHandler);

function errorHandler(error, req, res, next) {
	console.log(error);
	res.status(500).json({ error: "Data could not be retrieved" });
}

module.exports = server;
