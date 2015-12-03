"use strict";
var Backbone = require('backbone');
var ListOfHeroesModel = require('./../models/list-of-heroes-model');

var ListOfHeroesCollection = Backbone.Collection.extend({
  model: ListOfHeroesModel,
  url: function() {
    return '/marvelapi/characters';
  },
  initialize: function(options) {
    this.options = options;
  },
});

module.exports = ListOfHeroesCollection;
