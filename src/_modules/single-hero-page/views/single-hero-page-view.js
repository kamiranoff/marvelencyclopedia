'use strict';
var $ = require('jquery');
var Marionette = require('backbone.marionette');
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
  // templateHelpers: function() {
  //    var charBio;
  //   var charModel = this.model.get('character');
  //   if (typeof(charModel) !== 'undefined') {
  //     if (typeof(charModel.wiki) !== 'undefined') {
  //       if (typeof(charModel.wiki.groups) !== 'undefined') {
  //         charBio = charModel.wiki.bio.replace(/\[\[(.+?)\]\]/g, "<a href='/#/characters/$1'>$1</a>");
  //       }
  //     }

  //   }
  //   console.log("this.model.get('character')", charModel);
  //   return {
  //     charBio: charBio
  //   }
  // },

  setParallaxBg: function() {
    var $parallax = $('.hero-name');
    $parallax.css({
      'transition': '.3s all ease-out'
    });
    var speed = -0.2;
    window.onscroll = function() {
      var yOffset = window.pageYOffset;
      var percentOffset = 30 - (yOffset / speed) / 150;
      $parallax.css({
        'background-position': '0px ' + percentOffset + '%'
      });

    };
  },
  initParallaxBg: function() {
    console.log('afterRender');
    $(document).scrollTop(0);
    this.setParallaxBg();


  },
});
