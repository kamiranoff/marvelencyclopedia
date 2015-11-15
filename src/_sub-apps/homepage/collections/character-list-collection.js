"use strict";
var Backbone = require('backbone');
var CharacterModel = require('./../models/character-in-list-model');

module.exports = Backbone.Collection.extend({
  model:CharacterModel,
  url: function() {
    return '/marvelapi/characters';
  },

  initialize: function(models,options) {
    console.log('Marvel Collection - Initialize');
  }

   // byTeam: function (team) {
   //      filtered = this.filter(function (character) {
   //          return character.get("team") === team;
   //      });
   //      //return new Boxes(filtered);//This makes these filtering methods chainable (boxes.byColor("red").bySize("L"), for example).
   //  }


});
