'use strict';

var Service = require('backbone.service');
var _ = require('lodash');
var HomepageView = require('./views/homepage-view');

var ListOfHeroesCollection = require('./collections/list-of-heroes-collection');
var ListOfHeroesView = require('./views/list-of-heroes-view');

var FilterView = require('./../filter/views/filter-view');

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

    this.initData();
    this.initViews();
  },

  initData: function() {
    var self = this;
    this.listOfHeroesCollection = new ListOfHeroesCollection();
    this.listOfHeroesCollection.fetch({
      wait: true,
      reset: true,
      success: function(response) {
       // self.initViews();
        self.initialModelsInCollection = response.models;
      }
    });
  },
  initViews: function(options) {
    this.initFilterView(options);
    this.initListOfHeroesView();
    this.eventsListener();
  },

  initListOfHeroesView: function() {
    this.listOfHeroesView = new ListOfHeroesView({
      collection: this.listOfHeroesCollection
    });
    this.view.getRegion('heroesRegion').show(this.listOfHeroesView.render());
  },
  initFilterView: function() {
    this.filterView = new FilterView();
    this.view.getRegion('filterRegion').show(this.filterView.render());

  },

  getFilteredCollection: function(userInput) {
    this.listOfHeroesCollection.reset(this.initialModelsInCollection);
    var filteredCollection = _.filter(this.listOfHeroesCollection.models,function(item){
      return item.get('character').name.toLowerCase().indexOf(userInput) !== -1;
    });
    console.log('filteredCollection',filteredCollection);
    this.listOfHeroesCollection.reset(filteredCollection);
  },
  eventsListener: function() {
    this.listenTo(this.filterView, 'search:value:changed', this.getFilteredCollection);

  }


});
