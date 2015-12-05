'use strict';
var Marionette = require('backbone.marionette');

var childFilterView = require('./child-filter-view');

module.exports = Marionette.CollectionView.extend({
  childView: childFilterView,
  className: 'filter-view-container',

  collectionEvents: {
    'change':'render'
  },
  initialize: function() {
    console.log('filter View - initialize',this.collection);
  },
  modelEvents: {
    'change': 'onRender'
  },
  onRender:function(){

  },

  emitSearchValueChanged: function(string) {
    this.trigger('filter:value:changed', string);

  },


});
