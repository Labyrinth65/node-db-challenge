module.exports = {
	displayTrueFalse: function(projectOrAction) {
		return {
			...projectOrAction,
			completed: projectOrAction.completed === 1 ? true : false
		};
	}
};
