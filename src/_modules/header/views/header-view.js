'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/header-template.hbs');

module.exports = Marionette.ItemView.extend({

  template: tpl,

  className: 'header',

  initialize: function(options) {
    this.render();
  },

  templateHelpers: {
    title: function () {
      return this.options.title;
    }
  }
});
