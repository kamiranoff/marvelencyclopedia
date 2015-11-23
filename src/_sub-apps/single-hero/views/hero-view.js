'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('./../templates/single-hero-template.hbs');


module.exports = Marionette.LayoutView.extend({
  template: tpl,

  className: 'single-hero-page',


  regions: {
    heroRegion: '[data-region="hero-region"]'
  },

  initialize: function(model) {
    console.log('Single-hero-view - Initialize');
    console.log('Single-hero-view - Initialize - options', this.model);

    this.render();


  },

});
