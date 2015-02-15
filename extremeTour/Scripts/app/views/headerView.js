/// <reference path="../models/appState.js" />
/// <reference path="../../backbone.js" />
var app = app || {};

(function ($) {
	'use strict';

	app.HeaderView = Backbone.View.extend({
		el: $("#header"),

		template: _.template($('#headerTemplate').html()),

		initialize: function () {
			if (app.applicationModel.get('isDebugMode')) {
				console.info('Header view has been initialized');
			}

			this.listenToOnce(app.applicationModel, 'change : state', _.bind(this.render, this));
		},

		events: {
			'click .main-nav .main': 'showStart',
			'click .main-nav .navbar-brand, .main-nav .main-title': 'showStartAndCheckLink',
			'click .main-nav .gallery': 'showGallery',
			'click .main-nav .responses': 'showResponses',
			'click .main-nav .contacts': 'showContacts',

			// share links
			'click .main-nav .icon-circle.twitter': 'shareTwitter',
			'click .main-nav .icon-circle.facebook': 'shareFacebook',
			'click .main-nav .icon-circle.vk': 'shareVk'
		},

		shareTwitter: function () {
			this.sharePost.twitter(app.applicationModel.get('shareParams').url, app.applicationModel.get('shareParams').title);
		},

		shareFacebook: function () {
			this.sharePost.facebook(
				app.applicationModel.get('shareParams').url,
				app.applicationModel.get('shareParams').title,
				app.applicationModel.get('shareParams').img,
				app.applicationModel.get('shareParams').description);
		},

		shareVk: function () {
			this.sharePost.vkontakte(
				app.applicationModel.get('shareParams').url,
				app.applicationModel.get('shareParams').title,
				app.applicationModel.get('shareParams').img,
				app.applicationModel.get('shareParams').description);
		},

		sharePost: {
			vkontakte: function (purl, ptitle, pimg, text) {
				var url = 'http://vkontakte.ru/share.php?';
				url += 'url=' + encodeURIComponent(purl);
				url += '&title=' + encodeURIComponent(ptitle);
				url += '&description=' + encodeURIComponent(text);
				url += '&image=' + encodeURIComponent(pimg);
				url += '&noparse=true';
				this.popup(url);
			},
			facebook: function (purl, ptitle, pimg, text) {
				var url = 'http://www.facebook.com/sharer.php?s=100';
				url += '&p[title]=' + encodeURIComponent(ptitle);
				url += '&p[summary]=' + encodeURIComponent(text);
				url += '&p[url]=' + encodeURIComponent(purl);
				url += '&p[images][0]=' + encodeURIComponent(pimg);
				this.popup(url);
			},
			twitter: function (purl, ptitle) {
				var url = 'http://twitter.com/share?';
				url += 'text=' + encodeURIComponent(ptitle);
				url += '&url=' + encodeURIComponent(purl);
				url += '&counturl=' + encodeURIComponent(purl);
				this.popup(url);
			},

			popup: function (url) {
				window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
			}
		},

		showStart: function () {
			app.applicationModel.set('state', app.states.start);
		},

		showStartAndCheckLink: function () {
			app.applicationModel.set('state', app.states.start);
			this.$el.find('.nav.navbar-nav .active').removeClass('active');
			this.$el.find('.nav.navbar-nav .main').addClass('active');
		},

		showGallery: function () {
			app.applicationModel.set('state', app.states.gallery);
		},

		showResponses:function () {
			app.applicationModel.set('state', app.states.responses);
		},

		showContacts:function () {
			app.applicationModel.set('state', app.states.contacts);
		},

		menuToggle: function () {
			if (app.applicationModel.get('state') === app.states.start) {
				var windowWidth = $(window).width();
				if (windowWidth < 960) {
					$('.main-nav').addClass('fixed-menu slideInDown');
				} else {
					if ($(window).scrollTop() > 10) {
						$('.main-nav').addClass('fixed-menu animated slideInDown');
					} else {
						$('.main-nav').removeClass('fixed-menu animated slideInDown');
					}
				}
			} else {
				$('.main-nav').addClass('fixed-menu slideInDown');
			}
		},

		render: function () {
			$(this.el).empty().html(this.template());
			if (app.applicationModel.get('isDebugMode')) {
				console.info('Header view has rendered');
			}
			this.menuToggle();
		}
	});

	app.headerView = new app.HeaderView();

})(jQuery);

