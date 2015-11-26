"use strict";

var Marionette = require('backbone.marionette');
var HeaderView = require('./views/header-view');


module.exports = Marionette.Object.extend({

  initialize: function(options) {
    console.log('HEADER MODULE - initialize',options);
    this.container = options.container;
    this.initHeader(options);
  },

  initHeader: function(options) {
    var headerView = new HeaderView(options);
    this.container.show(headerView);
  }


});
