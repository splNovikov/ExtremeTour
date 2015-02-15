/// <reference path="../../backbone.js" />
var app = app || {};

(function ($) {
	'use strict';

	app.ResponsesView = Backbone.View.extend({
		el: $("#body"),

		template: _.template($('#responsesTemplate').html()),

		initialize: function () {
			if (app.applicationModel.get('isDebugMode')) {
				console.info('Responses view has been initialized');
			}
		},

		events: {},

		render: function () {
			$(this.el).empty().html(this.template());
		}
	});

	app.responsesView = new app.ResponsesView();

})(jQuery);

