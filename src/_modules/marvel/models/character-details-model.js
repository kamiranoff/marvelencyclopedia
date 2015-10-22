"use strict";
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: "/marvelapi/character/",
  idAttribute: "_id",
  initialize: function(attributes, options) {
    console.log('attributes',attributes);
    console.log('options',options);

  }

});
