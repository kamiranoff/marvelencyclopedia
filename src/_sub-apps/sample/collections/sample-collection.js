'use strict';

var Backbone = require('backbone');
var sampleModel = require('./../models/sample-model');

module.exports = Backbone.Collection.extend({
  model: sampleModel,

  url: function() {
    return "/dashboard/sample/collection/";
  },

  initialize: function(models, options) {

    console.log("Sample Collection - initialize");
  },

});
