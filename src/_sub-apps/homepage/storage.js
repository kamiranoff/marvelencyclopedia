var Storage = require('backbone.storage');
var CharacterModel = require('./models/character-in-list-model');
var CharacterListCollection = require('./collections/character-list-collection');

var CharactersStorage = Storage.extend({
  model: CharacterModel,
  collection: CharacterListCollection
});

module.exports = new CharactersStorage();
