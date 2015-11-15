'use strict';

var Marionette = require('backbone.marionette');
var CharacterInListView = require('./character-in-list-view');


module.exports = Marionette.CollectionView.extend({
  childView: CharacterInListView,

  tagName:"ul",
  className: 'last-ndr-infos',

  collectionEvents: {
      "change": "render"
  },

  onRender: function() {
  },

})
