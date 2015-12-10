'use strict';
var $ = require('jquery');
var Backone = require('backbone');
var Marionette = require('backbone.marionette');
Backone.$ = $;

var tpl = require('./../templates/filter-tpl.hbs');

module.exports = Marionette.ItemView.extend({
  template: tpl,
  tagName: 'li',
  ui: {
    filterButton: '.filter-button',
  },
  events: {
    'click @ui.filterButton': "catchUserFilter"
  },
  toggleAttr: function(attr, silent) {
    var data = {},
      value = this.model.get(attr);
    data[attr] = !value;
    this.model.set(data, {
      silent: silent
    });
  },

  templateHelpers: function() {
    return {
      categoriesIcon: this.model.get('categories').toLowerCase()
    }
  },
  catchUserFilter: function(e) {
    var current = $(e.currentTarget);
    current.toggleClass('selected');
    this.toggleAttr('selected', true);
    console.log('this.model',this.model);

    this.emitFilterEvent(current);
  },

  emitFilterEvent: function(array) {
    this.trigger('filter:value:changed', array);

  },
});
