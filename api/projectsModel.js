const db = require("../data/db-config.js");
const mappers = require("./mappers");

module.exports = {
	getAll: function() {
		return db("projects").then(projects =>
			projects.map(project =>
				mappers.dispProjNoAct({
					...project
				})
			)
		);
	},

	// getById: function(id) {
	// 	return db("projects")
	// 		.where("id", id)
	// 		.first()
	// 		.then(project => {
	// 			return mappers.displayProject({
	// 				...project,
	// 				actions: async (req, res) => {
	// 					try {
	// 						const pActions = await this.getProjectActions(project.id);
	// 						res.json(pActions);
	// 					} catch (error) {
	// 						console.log(error);
	// 					}
	// 				}
	// 			});
	// 		});
	// },

	// getById: function(id) {
	// 	let query = db("projects as p");

	// 	if (id) {
	// 		query.where("p.id", id).first();

	// 		const promises = [query, this.getProjectActions(id)]; // [ projects, actions ]

	// 		return Promise.all(promises).then(function(results) {
	// 			let [project, actions] = results;

	// 			if (project) {
	// 				project.actions = actions;

	// 				return mappers.displayProject(project);
	// 			} else {
	// 				return null;
	// 			}
	// 		});
	// 	}

	// 	return query.then(projects => {
	// 		return projects.map(project => mappers.displayProject(project));
	// 	});
	// },

	getByIdNoAct: function(id) {
		return db("projects")
			.where("id", id)
			.first()
			.then(project =>
				mappers.dispProjNoAct({
					...project
				})
			);
	},

	insert: function(project) {
		return db("projects")
			.insert(project)
			.then(([id]) => this.getByIdNoAct(id));
	},

	update: function(id, changes) {
		return db("projects")
			.where("id", id)
			.update(changes)
			.then(count => (count > 0 ? this.getById(id) : null));
	},

	remove: function(id) {
		return db("projects")
			.where("id", id)
			.del()
			.then(() => this.getAll());
	},

	getProjectActions: function(project_id) {
		return db("actions")
			.where({ project_id })
			.then(actions =>
				actions.length === 0
					? "There are no actions for this project"
					: actions.map(action => mappers.displayAction(action))
			);
	}
};
