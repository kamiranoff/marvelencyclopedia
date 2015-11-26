"use strict";

var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var HeroView = require('./character-list-view.js');
var vibrant = require('../../../_scripts/vibrant-custom/vibrant.js');

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'characters-list',
  vibrantColorHex: '',

  initialize: function(options) {
    console.log("Characters List View - initialize");
    this.renderHelper();
    this.fetchData();
    this.listenTo(this.collection, 'sync', this.render);
    $('.page').attr('data-page', 'homepage');



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
    var currentElement, vibrant, swatch, $targetEl;
    $(img).hover(function(e) {
      currentElement = e.currentTarget;
      currentElement.crossOrigin = "Anonymous";

      vibrant = new Vibrant(currentElement);
      swatch = vibrant.swatches();
      this.vibrantColorHex = swatch.Vibrant.getHex();

      $targetEl = $(this).closest(commonParent).find(targetEl);
      $targetEl.css('background', this.vibrantColorHex);

    }, function() {
      $targetEl.removeAttr('style');
      $targetEl.css({
        'border-bottom': '2px solid ' + this.vibrantColorHex,
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
    //this.filterByTeam();
    return this;
  },

  // filterByTeam:function(){
  //   var collect = this.collection.filter(function(model){
  //     console.log(_.indexOf('Avengers'));
  //     return ( _.indexOf(model.get('character.wiki.categories'), "Avengers") >= 0 );
  //   });
  //   console.log('filterByTeam',collect);
  // },


  fetchData: function() {
    console.log('HomepageView - fetchData - fetching data');
    this.collection.fetch({
      wait: true
    });
  }
});
