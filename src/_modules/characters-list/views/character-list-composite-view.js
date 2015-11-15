'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/character-list.hbs');

var CharacterInListView = require('./character-in-list-view');


module.exports = Marionette.CompositeView.extend({
  template: tpl,
  childView: CharacterInListView,
  childViewContainer: '.characters-list-container',
  modelEvents: {
    "change": "render"
  },

  onRender:function(){
    console.log('onRender');
  },

});
