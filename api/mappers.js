module.exports = {
	displayProjectComplete: function(project) {
		return {
			...project,
			completed: project.completed === 1 ? true : false,
			actions: project.actions
				? project.actions.map(action => ({
						...action,
						completed: action.completed === 1 ? true : false
				  }))
				: "There are no actions for this project."
		};
	},
	displayProject: function(project) {
		return {
			...project,
			completed: project.completed === 1 ? true : false
		};
	},
	displayAction: function(action) {
		return {
			...action,
			completed: action.completed === 1 ? true : false
		};
	}
};
