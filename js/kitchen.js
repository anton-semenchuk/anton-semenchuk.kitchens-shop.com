jQuery(document).ready(function() {
	jQuery('.kitchen-content').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
		offset: 10
	});
});