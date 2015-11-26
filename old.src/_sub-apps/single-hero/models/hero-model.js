"use strict";
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: "/marvelapi/character/",
  idAttribute: "_id",
  initialize: function(attributes, options) {
    console.log('SINGLE-HERO MODEL attributes', attributes);
    console.log('SINGLE-HERO MODEL options', options);

  }

});
