'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('./../templates/header-template.hbs');

module.exports = Marionette.ItemView.extend({
  template: tpl,

  className: 'header',

  collectionEvents: {
    all: 'render'
  },
  initialize: function(options) {
    console.log('HEADER VIEW - initialize',options);
    this.render();
  },

});
