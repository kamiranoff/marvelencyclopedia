'use strict';
var Marionette = require('backbone.marionette');
var _ = require('lodash');

var tpl = require('./../templates/filter-tpl.hbs');

module.exports = Marionette.ItemView.extend({
  template: tpl,
  className: 'filter-view-container',
  ui: {
    searchBox: '.search-box'
  },
  events: {
    'input @ui.searchBox': "getTextFromUser"
  },
  initialize: function() {
    console.log('Filter View - initialize');
  },
  collectionEvents: {
    'sync': 'getAllCharsName'
  },
  getAllCharsName: function() {
    console.log('getAllCharsName this.$el', this.collection);
    var charactersInCollection = this.collection.pluck("character");
    var arrayOfNames = [],
      namesInCollection = [];
    for (var i = 0; i < charactersInCollection.length; i++) {
      namesInCollection = _.pick(charactersInCollection[i], 'name');
      namesInCollection = _.values(namesInCollection);
      arrayOfNames.push(namesInCollection[0]);
    }
    console.log('arrayOfNames', arrayOfNames);
    this.arrayOfNames = arrayOfNames;
  },

  getTextFromUser: function() {
    this.filterArrayOfNames = [];
    var self = this;
    var userInput = this.ui.searchBox.val().toLowerCase().trim();
    var arrayOfNames = this.arrayOfNames;

    for (var i = 0; i < arrayOfNames.length; i++) {
      if (
        arrayOfNames[i].toLowerCase().indexOf(userInput) > -1 === true
      ) {
        self.filterArrayOfNames.push(arrayOfNames[i].toLowerCase());
      }

    }
    setTimeout(function() {
      self.emitSearchValueChanged()
    }, 200);
  },
  emitSearchValueChanged: function() {
    //console.log('filterArrayOfNames', this.filterArrayOfNames);
    this.trigger('search:value:changed', this.filterArrayOfNames);

  }
});
