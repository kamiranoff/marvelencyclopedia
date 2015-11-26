'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/single-hero-template.hbs');

module.exports = Marionette.ItemView.extend({

  template: tpl,

  className: 'single-hero-container',

  initialize: function(model) {
    this.render();
    console.log('Single-hero-view - Initialize');
    console.log('Single-hero-view - Initialize - options', this.model);
  },

});
