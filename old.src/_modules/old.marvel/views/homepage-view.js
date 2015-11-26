"use strict";

var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var tpl = require('../templates/homepage.hbs');
var HeroesView = require('./characters-list-view.js');
var MarvelCollection = require('../collections/marvelapi-collection');

module.exports = Backbone.View.extend({
  el: '.marvel-app',
  className: 'marvel-api',

  template: tpl,


  initialize: function(options) {
    console.log("homepage - initialize");
    this.render();
  },
  render: function() {
    var marvelCollection = new MarvelCollection();
    var heroes = new HeroesView({
      collection: marvelCollection
    });

    this.$el.html(heroes.$el);

    //this.$el.html(this.template());
  }
});
