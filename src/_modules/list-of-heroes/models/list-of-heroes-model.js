"use strict";
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {
    "_id": "",
    "character": {
      "name": "",
      "wiki": {
        "categories": [],
        "groups": ""
      },
      "thumbnail": {
        "path": "",
        "extension": ""
      }
    }
  },
  url: function() {
    return '/marvelapi/characters';
  },
});
