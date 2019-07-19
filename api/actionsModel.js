const db = require("../data/db-config.js");
const mappers = require("./mappers");

module.exports = {
	getAll: function() {
		return db("actions");
	},

	getById: function(id) {
		return db("actions")
			.where("id", id)
			.first()
			.then(action =>
				mappers.displayAction({
					...action
				})
			);
	},

	insert: function(recipe) {
		return db("actions")
			.insert(recipe)
			.then(([id]) => this.getById(id));
	},

	update: function(id, changes) {
		return db("actions")
			.where("id", id)
			.update(changes)
			.then(count => (count > 0 ? this.getById(id) : null));
	},

	remove: function(id) {
		return db("actions")
			.where("id", id)
			.del();
	}
};
