var Service = require('backbone.service');
var Backbone = require('backbone');
var HeaderView = require('./../views/header-view');
var Marionette = require('backbone.marionette');

module.exports = Service.extend({

  setup: function(options) {
    this.container = options.container;
    console.log('HEADER setup this.container', this.container);
    this.view = new HeaderView({
      title: 'Marvel'
    });
    this.container.show(this.view);
  },

  start: function() {
    console.log('HEADER start this.container', this.container);
  },


});
