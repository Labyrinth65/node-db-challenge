exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("contexts")
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex("contexts").insert([
				{ context: "at home" },
				{ context: "at work" },
				{ context: "make snack" },
				{ context: "make dinner" }
			]);
		});
};
