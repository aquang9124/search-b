import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		scrollToElement: function(element) {
			$('html, body').animate({
				scrollTop: $('#' + element).offset().top - 50
			}, 600);
		}
	}
});

$(window).on('scroll', function() {
	if ($(window).scrollTop() > 130) {
		$('.main-links').addClass('fixed-nav');
		$('.brand-wrapper').addClass('extended');
	}
	else {
		$('.main-links').removeClass('fixed-nav');
		$('.brand-wrapper').removeClass('extended');
	}
});