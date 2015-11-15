'use strict';

var Marionette = require('backbone.marionette');
var CharacterListCompositeView = require('./views/character-list-composite-view');

module.exports = Marionette.Object.extend({

  initialize: function(options) {
    this.view = new CharacterListCompositeView(options);
  },

  getView: function() {
    return this.view;
  },



});
