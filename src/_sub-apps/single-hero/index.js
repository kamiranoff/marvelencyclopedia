'use strict';

//require dependencies
var $ = require('jquery');
var Marionette = require('backbone.marionette');
var Router = require('./router');

//require Sub App
var SampleView = require('./views/hero-view');
var SampleModel = require("./models/hero-model");
var heroCollection = require('./collections/hero-collection');

//require modules
var SampleModule = require('../../_modules/hero');


module.exports = Marionette.Object.extend({

  initialize: function(options) {
    this.container = options.container;
    this.layout = new SampleView();

    this.router = new Router({
      controller: this
    });
  },

  /**
   *
   * Init Models and collection
   *
   */
  initData: function() {
    this.heroModel = new SampleModel();
  },

  /**
   *
   * Init views
   *
   */
  initViews: function() {
    this.initSample();
  },

  /**
   *
   * fetching Data
   *
   */
  fetchData: function() {
   // this.heroModel.fetch();
  },

  hero: function() {
    console.log('ROUTER - hero function');
    this.initData();
    this.initViews();

    $(this.container).html(this.layout.$el).addClass('is-visible');

    this.fetchData();
  },

  initSample:function(){
    this.heroModule = new SampleModule({
      model :this.heroModel
    });
    this.layout.getRegion('heroRegion').show(this.heroModule.getView());

  }
});
