"use strict";

var Marionette = require('backbone.marionette');
var HeaderView = require('./views/header-view');


module.exports = Marionette.Object.extend({

  initialize: function(options) {
    //this.model = new HeaderModel();
    this.view = new HeaderView(options);

  },

  getView: function() {
    return this.view;
  }


});
