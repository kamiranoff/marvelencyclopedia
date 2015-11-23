'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('./../templates/footer-template.hbs');

module.exports = Marionette.ItemView.extend({

  template: tpl,

  className: 'footer',

  initialize: function(options) {
    this.render();
  },

  templateHelpers: {
    title: function () {
      return this.options.title;
    }
  }
});
