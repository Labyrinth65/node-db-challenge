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
	displayTrueFalse: function(projectOrAction) {
		return {
			...projectOrAction,
			completed: projectOrAction.completed === 1 ? true : false
		};
	}
};
