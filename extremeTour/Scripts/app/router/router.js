/// <reference path="../backbone.js" />
/// <reference path="../models/appState.js" />
var app = app || {};

(function ($) {
	'use strict';

	app.Router = Backbone.Router.extend({

		routes: {
			"": "start",
			"/": "start",
			"gallery": "showGallery",
			"responses": "responses",
			"contacts": "contacts",
			"albums/:id": "albums"
		},

		start: function () {
			app.applicationModel.set({ state: app.states.start });
			app.startView.render();
		},

		showGallery: function () {
			app.applicationModel.set({ state: app.states.gallery });
			app.galleryView.render();
		},

		responses: function () {
			app.applicationModel.set({ state: app.states.responses });
			app.responsesView.render();
		},

		contacts: function () {
			app.applicationModel.set({ state: app.states.contacts });
			app.contactsView.render();
		},

		albums: function (id) {
			app.applicationModel.set({ state: app.states.gallery });
		}

	});

	app.router = new app.Router();

})(jQuery);