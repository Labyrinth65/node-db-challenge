const projectsDB = require("./api/projectsModel.js");
const actionsDB = require("./api/actionsModel.js");
const contextsDB = require("./api/contextsModel.js");

module.exports = {
	checkProject,
	checkProjectId,
	checkAction,
	checkActionId,
	checkContext,
	checkContextId
};

async function checkProjectId(req, res, next) {
	try {
		const project = await projectsDB.getByIdNoAct(req.params.id);
		if (project) {
			req.project = project;
			next();
		} else {
			res.status(404).json({ message: "Project ID Could Not Be Found." });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: "The project information could not be retrieved."
		});
	}
}

function checkProject(req, res, next) {
	if (Object.keys(req.body).length === 0)
		return res.status(400).json({ message: "Missing Project Data." });
	const { name, description } = req.body;
	if (!name || !description)
		return res.status(400).json({
			message:
				"Please ensure information for name and description are included."
		});
	next();
}

async function checkActionId(req, res, next) {
	try {
		const action = await actionsDB.getById(req.params.id);
		if (action) {
			req.action = action;
			next();
		} else {
			res.status(404).json({ message: "Action ID Could Not Be Found." });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: "The action information could not be retrieved."
		});
	}
}

function checkAction(req, res, next) {
	if (Object.keys(req.body).length === 0)
		return res.status(400).json({ message: "Missing Action Data." });
	const { description, notes } = req.body;
	if (!description || !notes)
		return res.status(400).json({
			message:
				"Please ensure information for description and notes are included."
		});
	next();
}

async function checkContextId(req, res, next) {
	try {
		const context = await contextsDB.getById(req.params.id);
		if (context) {
			req.context = context;
			next();
		} else {
			res.status(404).json({ message: "Context ID Could Not Be Found." });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: "The context information could not be retrieved."
		});
	}
}

function checkContext(req, res, next) {
	if (Object.keys(req.body).length === 0)
		return res.status(400).json({ message: "Missing Context Data." });
	const { context } = req.body;
	if (!context)
		return res.status(400).json({
			message: "Please ensure information for context is included."
		});
	next();
}
