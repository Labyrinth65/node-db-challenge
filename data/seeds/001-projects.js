exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("projects")
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex("projects").insert([
				{
					name: "Make cookies",
					description: "Make chocolate chip cookies",
					completed: false
				},
				{
					name: "Make pizza",
					description: "Make margherita pizza",
					completed: false
				}
			]);
		});
};
