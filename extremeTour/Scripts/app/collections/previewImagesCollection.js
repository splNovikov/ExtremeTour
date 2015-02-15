/// <reference path="../../backbone.js" />
var app = app || {};

(function ($) {
	'use strict';

	app.ImagesCollection = Backbone.Collection.extend({
		model: app.ImageModel
	});

	app.previewImagesCollection = new app.ImagesCollection([
		new app.ImageModel({
			Id: 0,
			src: '/Content/images/gallery/mini/extremTour_diving_sm.jpg',
			alt: 'extremTour_diving',
			title: 'Дайвинг',
			description: 'Дайвинг'
		}),
		new app.ImageModel({
			Id: 1,
			src: '/Content/images/gallery/mini/extremTour_fishing_sm.JPG',
			alt: 'extremTour_fishing',
			title: 'Рыболовные туры',
			description: 'Рыболовные туры'
		}),
		new app.ImageModel({
			Id: 2,
			src: '/Content/images/gallery/mini/extremTour_seaWalk_sm.JPG',
			alt: 'extremTour_seaWalk',
			title: 'Морские прогулки',
			description: 'Морские прогулки'
		}),
		new app.ImageModel({
			Id: 3,
			src: '/Content/images/gallery/mini/extremTour_snowMobile_sm.JPG',
			alt: 'extremTour_snowMobile',
			title: 'Снегоходные туры',
			description: 'Снегоходные туры'
		}),
		new app.ImageModel({
			Id: 4,
			src: '/Content/images/gallery/mini/extremTour_offroad_sm.jpg',
			alt: 'extremTour_offroad',
			title: 'Внедорожные туры',
			description: 'Внедорожные туры'
		}),
		new app.ImageModel({
			Id: 5,
			src: '/Content/images/gallery/mini/extremTour_water_hiking__sm.jpg',
			alt: 'extremTour_water_hiking',
			title: 'Водно-пешие туры',
			description: 'Водно-пешие туры'
		}),
		new app.ImageModel({
			Id: 6,
			src: '/Content/images/gallery/mini/extremTour_ecologic_sm.jpg',
			alt: 'extremTour_eсologic',
			title: 'Экологические туры',
			description: 'Экологические туры'
		}),
		new app.ImageModel({
			Id: 7,
			src: '/Content/images/gallery/mini/extremTour_ethno_sm.jpg',
			alt: 'extremTour_ethno',
			title: 'Этнографические туры',
			description: 'Этнографические туры'
		}),
		new app.ImageModel({
			Id: 8,
			src: '/Content/images/gallery/mini/extremTour_excursion_sm.jpg',
			alt: 'extremTour_excursion',
			title: 'Экскурсионные туры',
			description: 'Экскурсионные туры'
		})
	]);
})(jQuery);
