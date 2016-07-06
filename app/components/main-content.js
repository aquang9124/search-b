import Ember from 'ember';

const $ = Ember.$;
const $window = Ember.$(window);

export default Ember.Component.extend({
	setup: function() {
		this.boundScrollHandler = _.throttle(Ember.run.bind(this, this.didScroll), 32);
		$window.on('scroll', this.boundScrollHandler);
	}.on('didInsertElement'),
	teardown: function() {
		$window.off('scroll', this.boundScrollHandler);
	}.on('willDestroyElement'),
	didScroll: function() {
		if ($window.scrollTop() > 130) {
			$('.top-nav').addClass('fixed-nav');
			$('.brand-wrapper').addClass('extended');
		}
		else {
			$('.top-nav').removeClass('fixed-nav');
			$('.brand-wrapper').removeClass('extended');
		}
	},
	boundScrollHandler: false
});
