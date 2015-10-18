"use strict";

var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var tpl = require('../templates/homepage.hbs');

var HeroView = Backbone.View.extend({
  tagName: 'li',

  template: _.template('<p><%= name %></p>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    console.log(this.model);
    this.$el.html(this.template(this.model.get('character')));
    console.log(this.$el.html(this.template(this.model.get('character'))));
    return this;

  }
});

module.exports = Backbone.View.extend({
  el: '.marvel-app',
  className: 'marvel-api',

  template: tpl,


  initialize: function(options) {
    console.log("homepage - initialize");
    this.fetchData();
    this.listenTo(this.collection, 'sync', this.render);

  },
  render: function() {
    var self = this;
    console.log(this.collection);
    this.collection.each(function(character) {
      console.log('character', character);

      var hero = new HeroView({
        model: character
      });
      self.$el.append(hero.el);

    });


   //this.$el.html(this.template());
  },

  fetchData: function() {
    console.log('HomepageView - fetchData - fetching data');
    this.collection.fetch({
      wait: true
    });
  }
});
