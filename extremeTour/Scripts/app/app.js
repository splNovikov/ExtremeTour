/// <reference path="../backbone.js" />
/// <reference path="models/appState.js" />
var app = app || {};

(function ($) {
	'use strict';

	app.applicationModel.on('change:state', function () {
		var state = this.get('state');
		if (state === app.states.start) {
			app.router.navigate('//', false);
		} else {
			app.router.navigate('//' + state, false);
		}
		app.headerView.menuToggle();
	});

	Backbone.history.start();

	//Scroll Menu

	$(window).resize(function () {
		app.headerView.menuToggle();
	});

	$(window).on('scroll', function () {
		app.headerView.menuToggle();
	});

	$('.main-nav ul').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 900,
		scrollOffset: 0,
		scrollThreshold: 0.3,
		filter: ':not(.no-scroll)'
	});

})(jQuery);