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


});
