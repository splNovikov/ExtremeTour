/// <reference path="../backbone.js" />
var app = app || {};

(function ($) {
	'use strict';

	app.ImageModel = Backbone.Model.extend({
		idAttribute: "Id",
		defaults: {
			src: 'no source',
			alt: 'no alt',
			title: 'no title',
			description: 'no description'
		},
	});

})(jQuery);