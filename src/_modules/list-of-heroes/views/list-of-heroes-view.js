'use strict';
//var $ = require('jquery');
var Marionette = require('backbone.marionette');
var HeroInListView = require('./hero-in-list-view');
var NoHeroesView = require('./no-hero-view');
var tpl = require('./../templates/heroes-composite-tpl.hbs');


module.exports = Marionette.CompositeView.extend({
  template: tpl,
  childView: HeroInListView,
  childViewContainer: ".characters-list",
  collectionEvents:{
    'change':'render'
  },
  emptyView : NoHeroesView,

  initialize: function(options) {
    console.log('LIST OF HEROES VIEW -initialize options', options);
  },

});
