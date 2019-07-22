exports.up = function(knex) {
	return knex.schema
		.createTable("projects", tbl => {
			tbl.increments();
			tbl
				.text("name")
				.unique()
				.notNullable();
			tbl.text("description").notNullable();
			tbl.boolean("completed").defaultTo(false);
		})
		.createTable("actions", tbl => {
			tbl.increments();
			tbl
				.integer("project_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("projects")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
			tbl.text("description").notNullable();
			tbl.text("notes").notNullable();
			tbl.boolean("completed").defaultTo(false);
		})
		.createTable("contexts", tbl => {
			tbl.increments();
			tbl
				.text("context")
				.unique()
				.notNullable();
		})
		.createTable("actions_contexts", tbl => {
			tbl.increments();
			tbl
				.integer("action_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("actions")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
			tbl
				.integer("context_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("contexts")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists("projects")
		.dropTableIfExists("actions")
		.dropTableIfExists("contexts")
		.dropTableIfExists("actions_contexts");
};
