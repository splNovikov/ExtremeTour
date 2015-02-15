/// <reference path="../backbone.js" />
var app = app || {};

(function ($) {
	'use strict';

	/* constants */
	app.states = {
		start: 'start',
		gallery: 'gallery',
		responses: 'responses',
		contacts: 'contacts'
	};

	app.ApplicationModel = Backbone.Model.extend({
		defaults: {
			state: null,
			isDebugMode: true,
			shareParams: {
				url: 'nord-extreme.ru',
				title: 'Nord-Extreme - awesome tours!!!',
				img: '', 
				description: 'Незабываемые экстремальные туры по Кольскому полуострову'
			}
		},
		initialize: function () {

			if (this.defaults.isDebugMode) {
				this.on('change:state', function () {
					console.log('state was changed to: ' + this.get('state').toUpperCase());
				});
			}

		}

	});

	app.applicationModel = new app.ApplicationModel();

})(jQuery);