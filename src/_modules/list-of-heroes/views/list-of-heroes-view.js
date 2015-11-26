var Marionette = require('backbone.marionette');
var HeroInListView = require('./hero-in-list-view');
var NoHeroesView = require('./no-hero-view');

module.exports = Marionette.CollectionView.extend({
  className:'characters-list',
  childView: HeroInListView,
  emptyView:NoHeroesView
})
