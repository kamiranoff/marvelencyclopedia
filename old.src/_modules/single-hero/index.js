"use strict";

var Marionette = require('backbone.marionette');
var SingleHeroView = require('./views/single-hero-view');


module.exports = Marionette.Object.extend({

  initialize: function(options) {
    console.log('SINGLE-HERO Module intialiaze',options);
   this.view = new SingleHeroView(options);
  },

  getView: function() {
    return this.view;
  },




});
