const db = require("../data/db-config.js");
const mappers = require("./mappers");

module.exports = {
	getAll: function() {
		return db("projects").then(projects =>
			projects.map(project =>
				mappers.displayTrueFalse({
					...project
				})
			)
		);
	},

	getById: async function(id) {
		const actions = await this.getProjectActions(id);
		return db("projects")
			.where("id", id)
			.first()
			.then(project =>
				project
					? mappers.displayTrueFalse({
							...project,
							actions
					  })
					: null
			);
	},

	getProjectActions: function(project_id) {
		return db("actions")
			.where({ project_id })
			.then(actions =>
				actions.length === 0
					? "There are no actions for this project"
					: actions.map(action => mappers.displayTrueFalse(action))
			);
	},

	insert: function(project) {
		return db("projects")
			.insert(project)
			.then(([id]) => this.getById(id));
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
	}
};
