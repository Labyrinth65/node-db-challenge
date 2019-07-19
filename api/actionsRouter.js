const express = require("express");

const actionsDB = require("./actionsModel.js");

const middleware = require("../middleware");

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const actions = await actionsDB.getAll(req.query);
		res.status(200).json(actions);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: "The listing of actions could not be retrieved."
		});
	}
});

router.get("/:id", middleware.checkActionId, async (req, res) => {
	try {
		res.status(200).json(req.action);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: "The information for the action specified could not be retrieved."
		});
	}
});

router.delete("/:id", middleware.checkActionId, async (req, res) => {
	try {
		const count = await actionsDB.remove(req.params.id);
		if (count > 0) {
			res.status(200).json(req.action);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: "The action could not be removed from the database"
		});
	}
});

router.put(
	"/:id",
	middleware.checkActionId,
	middleware.checkAction,
	async (req, res) => {
		try {
			const newaction = await actionsDB.update(req.params.id, req.body);
			res.status(200).json(newaction);
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: "something went wrong" });
		}
	}
);

module.exports = router;
