var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var tpl = require('../templates/character-list.hbs');

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'single-hero-link',
  template: tpl,

  updatedModel: function() {
    return {
      character: this.model.get('character'),
      _id: this.model.get('_id'),
      id:this.model.id,
      cid:this.model.get('cid')
    };
  },

  initialize: function() {
    console.log('Character-list-view - Initialize');
    this.render();
  },

  render: function() {
    console.log(this.updatedModel());
    this.$el.html(this.template(this.updatedModel()));
    return this;
  }
});
