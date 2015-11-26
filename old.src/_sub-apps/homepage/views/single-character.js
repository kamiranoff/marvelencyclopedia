var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var tpl = require('./../templates/single-character-tpl.hbs');


module.exports = Marionette.ItemView.extend({
  template: tpl,
  className: '',

  initialize: function(options) {
    this.model = options.model;
    this.model.fetch();
  },

  events: {

  },

  modelEvents: {
    change: 'render'
  }
});
