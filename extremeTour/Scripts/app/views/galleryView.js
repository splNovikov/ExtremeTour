/// <reference path="../../backbone.js" />
var app = app || {};

(function ($) {
	'use strict';

	app.GalleryView = Backbone.View.extend({
		el: $("#body"),

		template: _.template($('#galleryTemplate').html()),

		initialize: function () {
			if (app.applicationModel.get('isDebugMode')) {
				console.info('Gallery view has been initialized');
			}
		},

		events: {},

		render: function () {
			$(this.el).empty().html(this.template({ imgCollection: app.previewImagesCollection.toJSON() }));
		}
	});

	app.galleryView = new app.GalleryView();

})(jQuery);

