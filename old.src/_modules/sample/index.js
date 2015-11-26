"use strict";

var Marionette = require('backbone.marionette');
var SampleView = require('./views/sample-view');


module.exports = Marionette.Object.extend({

  initialize: function(options) {
    //this.model = new HeaderModel();
    this.view = new SampleView(options);

  },

  getView: function() {
    return this.view;
  }


});
