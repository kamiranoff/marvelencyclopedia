"use strict";
var Backbone = require('backbone');
var ListOfHeroesModel = require('./../models/list-of-heroes-model');

module.exports = Backbone.Collection.extend({
  model:ListOfHeroesModel,
  url: function() {
    return '/marvelapi/characters';
  },

  initialize: function(models,options) {
    console.log('Marvel Collection - Initialize');
  }
});
