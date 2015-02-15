/// <reference path="../../backbone.js" />
var app = app || {};

(function ($) {
	'use strict';

	app.ContactsView = Backbone.View.extend({
		el: $("#body"),

		template: _.template($('#contactsTemplate').html()),

		initialize: function () {
			if (app.applicationModel.get('isDebugMode')) {
				console.info('Contacts view has been initialized');
			}
		},

		events: {},

		render: function () {
			$(this.el).empty().html(this.template());
		}
	});

	app.contactsView = new app.ContactsView();

})(jQuery);

