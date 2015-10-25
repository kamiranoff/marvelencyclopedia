"use strict";

var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var HeroView = require('./character-list-view.js');
var vibrant = require('../../../_scripts/vibrant-custom/vibrant.js');

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'characters-list',

  initialize: function(options) {
    console.log("Characters List View - initialize");
    this.renderHelper();
    this.fetchData();
    this.listenTo(this.collection, 'sync', this.render);
    $('.page').attr('data-page', 'homepage');



  },
  events: {

  },
  renderHelper: function() {
    //RENDER CALLBACK HELPER
    _.bindAll(this, 'beforeRender', 'render', 'afterRender');
    var _this = this;
    this.render = _.wrap(this.render, function(render) {
      _this.beforeRender();
      render();
      _this.afterRender();
      return _this;
    });
  },

  beforeRender: function() {
    console.log('beforeRender');
  },

  setBgColorToTitleFromPic: function(img, targetEl, commonParent) {
    var currentElement, vibrant, swatch, vibrantColorHex, $targetEl;
    $(img).hover(function(e) {
      currentElement = e.currentTarget;
      currentElement.crossOrigin = "Anonymous";

      vibrant = new Vibrant(currentElement);
      swatch = vibrant.swatches();
      vibrantColorHex = swatch.Vibrant.getHex();

      $targetEl = $(this).closest(commonParent).find(targetEl);
      $targetEl.css('background', vibrantColorHex);

    }, function() {
      $targetEl.removeAttr('style');
      $targetEl.css({
        'border-bottom': '2px solid ' + vibrantColorHex,
        'padding-top': '8px'
      });
    });
  },

  afterRender: function() {
    console.log('afterRender');

    this.setBgColorToTitleFromPic('.character-link img', '.name', '.single-hero-link');


  },
  render: function() {
    var self = this;
    this.collection.each(function(character) {
      var hero = new HeroView({
        model: character
      });
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
  }
});
