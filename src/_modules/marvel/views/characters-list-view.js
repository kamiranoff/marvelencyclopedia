"use strict";

var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var HeroView = require('./character-list-view.js');

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'characters-list',

  initialize: function(options) {
    console.log("Characters List View - initialize");
    this.fetchData();
    this.listenTo(this.collection, 'sync', this.render);

  },
  events: {
    'click a.character-link': 'singleCharDisplay'
  },
  render: function() {
    var self = this;
    console.log(this.collection);
    this.collection.each(function(character) {
      console.log('character', character);

      var hero = new HeroView({
        model: character
      });
      console.log('self.$el.append(hero.$el);', self.$el.append(hero.$el));
      self.$el.append(hero.$el);

    });
    return this;


    //this.$el.html(this.template());
  },
    renderSingle: function(elSingle) {
    var self = this;
      self.$el.html(elSingle);

    //this.$el.html(this.template());
  },

  fetchData: function() {
    console.log('HomepageView - fetchData - fetching data');
    this.collection.fetch({
      wait: true
    });
  },
  singleCharDisplay: function(e) {
    e.preventDefault();
    console.log(e.currentTarget);
    var dataId = $(e.currentTarget).data('id');
    console.log(dataId);
    console.log(this.collection.get(dataId));
    var singleHero = new HeroView({model:this.collection.get(dataId)});
    this.$el.append(singleHero.$el);
    this.renderSingle(singleHero.$el);
  }
});
