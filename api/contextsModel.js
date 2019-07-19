const db = require("../data/db-config.js");

module.exports = {
	getAll: function() {
		return db("projects");
	},

	getById: function(id) {
		return db("projects")
			.where("id", id)
			.first();
	},

	insert: function(recipe) {
		return db("projects")
			.insert(recipe)
			.then(([id]) => this.getById(id).first());
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
			.del();
	}
};
