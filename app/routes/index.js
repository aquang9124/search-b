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