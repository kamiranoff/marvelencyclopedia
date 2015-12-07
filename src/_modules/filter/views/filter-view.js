'use strict';
var $ = require('jquery');
var Marionette = require('backbone.marionette');
var childFilterView = require('./child-filter-view');

module.exports = Marionette.CollectionView.extend({
  childView: childFilterView,
  className: 'filter-view-container',
  tagName:'ul',
  collectionEvents: {
    'change':'render'
  },
  ui: {
    filterButton: '.filter-button',
  },
  events: {
    'click @ui.filterButton': "catchUserFilter"
  },
  initialize: function() {
    console.log('filter View - initialize',this.collection);
  },
  modelEvents: {
    'change': 'onRender'
  },
  onRender:function(){

  },
  catchUserFilter:function(e){
    var current = $(e.currentTarget);
    var $categories = this.$el.find('.selected');
    var selectedCategories = $categories.data('categories');
    var selectedCategoriesArray = [];
    current.toggleClass('selected');
    // for(var i=0;i < $categories.length;i++){
    //   selectedCategoriesArray.push(selectedCategories[i]);
    // }
    // console.log('selectedCategories',selectedCategoriesArray);

    // this.emitSearchValueChanged(selectedCategoriesArray);
  },

  emitSearchValueChanged: function(array) {
    this.trigger('filter:value:changed', array);

  },


});
