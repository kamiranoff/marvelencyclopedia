'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/sample-template.hbs');

module.exports = Marionette.ItemView.extend({

  template: tpl,

  className: 'sample',

  // ui: {
  //   backButton: 'go-back'
  // },

  // events: {
  //   'click @ui.backButton': 'return',
  // },

  // templateHelpers: function() {
  //   return {
  //     title : this.options.title
  //   }
  // },
//  render : function() {
//    this.$el.html(this.template(this.model));
//  }

});
