var Marionette = require('backbone.marionette');
var $ = require('jquery');
var tpl = require('./../templates/single-hero-page-tpl.hbs');


module.exports = Marionette.ItemView.extend({
  template: tpl,
  className: 'single-hero-page',
  initialize: function() {
    console.log('SINGLE HERO PAGE VIEW - Initialize');
  },
  modelEvents: {
    'change': 'render',
    'sync': 'initParallaxBg'
  },

  setParallaxBg: function() {
    var parallax = $('.hero-name')[0];
    $('.hero-name').css({'transition':'.7s all ease-out'});
    var speed = -0.2;
    window.onscroll = function() {
      var yOffset = window.pageYOffset;
      var percentOffset = 30 - (yOffset / speed) / 100;
      parallax.style.backgroundPosition = "0px " + percentOffset + "%";

    };
  },
  initParallaxBg: function() {
    var _this = this;
    console.log('afterRender');
    $(document).scrollTop(0);
    this.setParallaxBg();


  },
});
