'use strict';
var Marionette = require('backbone.marionette');

var tpl = require('./../templates/filter-tpl.hbs');

module.exports = Marionette.ItemView.extend({
  template: tpl,
  tagName: 'li',
  templateHelpers: function() {
    return {
      categoriesIcon: this.model.get('categories').toLowerCase()
    }
  },
});
