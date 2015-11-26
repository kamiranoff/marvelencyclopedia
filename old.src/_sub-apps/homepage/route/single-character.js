var Route = require('backbone-routing').Route;
var SingleCharacterView = require('./../views/item-view');
var SingleCharacterModel = require('./../models/character-in-list-model');

module.exports = Route.extend({
  initialize:function(options) {
    this.container = options.container;
    this.render();
    this.fetch();
  },

  fetch: function(id) {
    this.singleCharacterModel = SingleCharacterModel();
    console.log('Route - single-character id',id);
    this.singleCharacterModel.fetch();
  },

  render:function() {
    this.view = new SingleCharacterView({
      model: this.singleCharacterModel
    });
    this.container.show(this.view);
  }
});
