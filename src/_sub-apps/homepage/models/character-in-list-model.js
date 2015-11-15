"use strict";
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {},
  initialize: function(options) {
    console.log("Character in list model - initialize", options);
  },
});
