'use strict';

//require dependencies
var $ = require('jquery');
var Marionette = require('backbone.marionette');
var Router = require('./router');

//require Sub App
var SampleView = require('./views/sample-view');
var SampleModel = require("./models/sample-model");
var sampleCollection = require('./collections/sample-collection');

//require modules
var SampleModule = require('../../_modules/sample');


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
    this.sampleModel = new SampleModel();
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
   // this.sampleModel.fetch();
  },

  sample: function() {
    console.log('ROUTER - sample function');
    this.initData();
    this.initViews();

    $(this.container).html(this.layout.$el).addClass('is-visible');

    this.fetchData();
  },

  initSample:function(){
    this.sampleModule = new SampleModule({
      model :this.sampleModel
    });
    this.layout.getRegion('sampleRegion').show(this.sampleModule.getView());

  }
});
