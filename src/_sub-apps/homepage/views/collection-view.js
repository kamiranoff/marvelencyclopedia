var Marionette = require('backbone.marionette');
var ItemView = require('./item-view');

module.exports = Marionette.CollectionView.extend({
  className: 'characters-list',
  childView: ItemView,
  collectionEvents:{
    'sync':'render'
  }
});
