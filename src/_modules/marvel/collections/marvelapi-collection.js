"use strict";
var Backbone = require('backbone');
var CharacterModel = require('../models/character');
var _ = require('lodash');
var $ = require('jquery');

module.exports = Backbone.Collection.extend({
  url: function() {
    return '/marvelapi/characters';
  },

  model: CharacterModel,

  initialize: function() {
    console.log('Marvel Collection - Initialize');
  }

   // byTeam: function (team) {
   //      filtered = this.filter(function (character) {
   //          return character.get("team") === team;
   //      });
   //      //return new Boxes(filtered);//This makes these filtering methods chainable (boxes.byColor("red").bySize("L"), for example).
   //  }


});
