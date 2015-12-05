var Marionette = require('backbone.marionette');

var tpl = require('./../templates/homepage-tpl.hbs');

module.exports = Marionette.LayoutView.extend({
  template: tpl,
  regions: {
    searchRegion: '[data-region="search-region"]',
    filterRegion: '[data-region="filter-region"]',
    heroesRegion: '[data-region="heroes-region"]'
  }
});
