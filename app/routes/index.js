import Ember from 'ember';
const $ = Ember.$;

export default Ember.Route.extend({
	menuActive: false,
	actions: {
		scrollToElement: function(element) {
			$('html, body').animate({
				scrollTop: $('#' + element).offset().top - 50
			}, 600);
		},
		openMobileMenu: function() {
			if (this.get('menuActive') === false) {
				this.set('menuActive', true);
				$('.open-menu-btn').addClass('active');
				$('.main-links').addClass('opened');
			}
			else {
				this.set('menuActive', false);
				$('.open-menu-btn').removeClass('active');
				$('.main-links').removeClass('opened');
			}
		},
		getBookInfo: function() {
			var val = $('.smaller-input').val();
		}
	}
});