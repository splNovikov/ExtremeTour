/// <reference path="../../backbone.js" />
var app = app || {};

(function ($) {
	'use strict';

	app.StartView = Backbone.View.extend({
		el: $("#body"),

		template: _.template($('#homeTemplate').html()),

		initialize: function () {
			if (app.applicationModel.get('isDebugMode')) {
				console.info('Start view has been initialized');
			}
		},

		events: {},

		render: function () {
			$(this.el).empty().html(this.template({ imgCollection: app.previewImagesCollection.toJSON() }));
		}
	});

	app.startView = new app.StartView();

})(jQuery);

