const express = require("express");

const projectsDB = require("./projectsModel.js");

const middleware = require("../middleware");

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const projects = await projectsDB.getAll(req.query);
		res.status(200).json(projects);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: "The listing of projects could not be retrieved."
		});
	}
});

router.get("/:id", middleware.checkProjectId, async (req, res) => {
	try {
		res.status(200).json(req.project);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: "The information for the project specified could not be retrieved."
		});
	}
});

router.post("/", middleware.checkProject, async (req, res) => {
	try {
		const project = await projectsDB.insert(req.body);
		res.status(201).json(project);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: "There was an error while adding the project to the database"
		});
	}
});

router.delete("/:id", middleware.checkProjectId, async (req, res) => {
	try {
		const count = await projectsDB.remove(req.params.id);
		if (count > 0) {
			res.status(200).json(req.project);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: "The project could not be removed from the database"
		});
	}
});

router.put(
	"/:id",
	middleware.checkProjectId,
	middleware.checkProject,
	async (req, res) => {
		try {
			const newproject = await projectsDB.update(req.params.id, req.body);
			res.status(200).json(newproject);
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: "something went wrong" });
		}
	}
);

module.exports = router;
