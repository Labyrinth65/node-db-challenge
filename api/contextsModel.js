const db = require("../data/db-config.js");

module.exports = {
	getAll: function() {
		return db("contexts");
	},

	getById: function(id) {
		return db("contexts")
			.where("id", id)
			.first();
	},

	insert: function(recipe) {
		return db("contexts")
			.insert(recipe)
			.then(([id]) => this.getById(id).first());
	},

	update: function(id, changes) {
		return db("contexts")
			.where("id", id)
			.update(changes)
			.then(count => (count > 0 ? this.getById(id) : null));
	},

	remove: function(id) {
		return db("contexts")
			.where("id", id)
			.del()
			.then(() => this.getAll());
	}
};
