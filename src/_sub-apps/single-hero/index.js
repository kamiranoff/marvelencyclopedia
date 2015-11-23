'use strict';

//require dependencies
var $ = require('jquery');
var Marionette = require('backbone.marionette');
var Router = require('./router');

//require Sub App
var HeroView = require('./views/hero-view');
var SingleHeroModel = require("./models/hero-model");

//require modules
var SingleHeroModule = require('./../../_modules/single-hero');


module.exports = Marionette.Object.extend({

  initialize: function(options) {
    console.log('SINGLE HERO SUB APP - Initialize', options);
    this.container = options.container;
    this.layout = new HeroView();

    this.router = new Router({
      controller: this
    });
  },

  /**
   *
   * Init Models and collection
   *
   */
  initData: function(heroId) {
    console.log('initData',heroId)
    this.singleHeroModel = new SingleHeroModel({id:heroId});
  },

  /**
   *
   * Init views
   *
   */
  initViews: function() {
    this.initSingleHeroModule();
  },

  /**
   *
   * fetching Data
   *
   */
  fetchData: function() {
     this.singleHeroModel.fetch();
  },

  hero: function(heroId) {
    console.log('ROUTER - hero function - heroId', heroId);
    this.initData(heroId);
    this.container.show(this.layout);

    this.initViews();


    this.fetchData();
  },

  initSingleHeroModule: function() {
    this.heroModule = new SingleHeroModule({
      model: this.singleHeroModel
    });
    this.layout.getRegion('heroRegion').show(this.heroModule.getView());

  }
});
