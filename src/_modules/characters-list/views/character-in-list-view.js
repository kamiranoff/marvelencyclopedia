'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/character.hbs');

module.exports = Marionette.ItemView.extend({
  className: 'single-hero-link',
  template: tpl,
  modelEvents: {
    "change": "render"
  },

  // updatedModel: function() {
  //   return {
  //     character: this.model.get('character'),
  //     _id: this.model.get('_id'),
  //     id:this.model.id,
  //     cid:this.model.get('cid')
  //   };
  // },
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
