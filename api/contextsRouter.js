const express = require("express");

const contextsDB = require("./contextsModel.js");

const middleware = require("../middleware");

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const contexts = await contextsDB.getAll(req.query);
		res.status(200).json(contexts);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: "The listing of contexts could not be retrieved."
		});
	}
});

router.get("/:id", middleware.checkContextId, async (req, res) => {
	try {
		res.status(200).json(req.context);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: "The information for the context specified could not be retrieved."
		});
	}
});

router.post("/", middleware.checkContext, async (req, res) => {
	try {
		const context = await contextsDB.insert(req.body);
		res.status(201).json(context);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: "There was an error while adding the context to the database"
		});
	}
});

router.delete("/:id", middleware.checkContextId, async (req, res) => {
	try {
		const count = await contextsDB.remove(req.params.id);
		if (count > 0) {
			res.status(200).json(req.context);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: "The context could not be removed from the database"
		});
	}
});

router.put(
	"/:id",
	middleware.checkContextId,
	middleware.checkContext,
	async (req, res) => {
		try {
			const newContext = await contextsDB.update(req.params.id, req.body);
			res.status(200).json(newContext);
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: "something went wrong" });
		}
	}
);

module.exports = router;
