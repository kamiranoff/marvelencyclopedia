"use strict";

var Marionette = require('backbone.marionette');
var FooterView = require('./views/footer-view');


module.exports = Marionette.Object.extend({

  initialize: function(options) {
    this.container = options.container;
    this.initFooter(options);
  },

  initFooter: function(options) {
    var footerView = new FooterView(options);
    this.container.show(footerView);
  }


});
