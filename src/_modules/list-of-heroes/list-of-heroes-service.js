'use strict';

var Service = require('backbone.service');
var _ = require('lodash');
var HomepageView = require('./views/homepage-view');

var ListOfHeroesCollection = require('./collections/list-of-heroes-collection');
var ListOfHeroesView = require('./views/list-of-heroes-view');

var FilterView = require('./../filter/views/filter-view');
var FilterModel = require('./../filter/models/filter-model');
module.exports = Service.extend({

  setup: function(options) {
    this.container = options.container;
    this.start();
  },
  start: function() {
    this.view = new HomepageView({
      collection: this.listOfHeroesCollection
    });
    this.container.show(this.view);

    this.initFilter();
    this.initListOfHeroes();
    this.initEventListener();
  },
  initFilter: function(options) {
    var self= this;
    this.filterModel = new FilterModel({
      loading: true
    });
    this.initFilterView(options);
    window.onload = function() {
      // this will fire after the entire page is loaded, including images
       self.filterModel.set('loading', false);
    };

  },
  initListOfHeroes: function() {
    var self = this;

    this.listOfHeroesCollection = new ListOfHeroesCollection();
    this.listOfHeroesCollection.fetch({
      success: function(response) {
        // self.initViews();
        self.initialModelsInCollection = response.models;

      }
    });
    this.initListOfHeroesView();

  },
  initEventListener: function() {

    this.eventsListener();
  },

  initListOfHeroesView: function() {
    this.listOfHeroesView = new ListOfHeroesView({
      collection: this.listOfHeroesCollection
    });
    this.view.getRegion('heroesRegion').show(this.listOfHeroesView.render());
  },
  initFilterView: function() {
    this.filterView = new FilterView({
      model: this.filterModel
    });
    this.view.getRegion('filterRegion').show(this.filterView.render());

  },

  getFilteredCollection: function(userInput) {
    var self = this;
    this.listOfHeroesCollection.reset(this.initialModelsInCollection);
    var filteredCollection = _.filter(this.listOfHeroesCollection.models, function(item) {
      return item.get('character').name.toLowerCase().indexOf(userInput) !== -1;
    });

    console.log('this.filterModel', this.filterModel);
    this.listOfHeroesCollection.reset(filteredCollection);
    setTimeout(function() {
      self.filterModel.set('loading', false);
    }, 100);


  },
  eventsListener: function() {
    this.listenTo(this.filterView, 'search:value:changed', this.getFilteredCollection);

  }


});
