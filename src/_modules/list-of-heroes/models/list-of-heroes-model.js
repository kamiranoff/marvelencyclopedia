"use strict";
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {},
  url: function() {
    return '/marvelapi/characters';
  },
});
