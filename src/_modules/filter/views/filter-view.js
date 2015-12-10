'use strict';
var $ = require('jquery');
var Marionette = require('backbone.marionette');
var childFilterView = require('./child-filter-view');

module.exports = Marionette.CollectionView.extend({
  childView: childFilterView,
  className: 'filter-view-container',
  tagName: 'ul',
  initialize: function() {
    console.log('filter View - initialize', this.collection);
  },


});
