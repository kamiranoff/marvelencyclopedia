'use strict';

var Service = require('backbone.service');
var _ = require('lodash');
var HomepageView = require('./views/homepage-view');

var ListOfHeroesCollection = require('./collections/list-of-heroes-collection');
var ListOfHeroesView = require('./views/list-of-heroes-view');

var SearchView = require('./../search/views/search-view');
var SearchModel = require('./../search/models/search-model');
var FilterView = require('./../filter/views/filter-view');
var FilterCollection = require('./../filter/collections/filter-collection');
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

    this.initSearch();
    this.initFilter();
    this.initListOfHeroes();
    this.initEventListener();
  },

  initSearch: function(options) {
    var self = this;
    this.searchModel = new SearchModel({
      loading: true
    });
    this.initSearchView(options);
    window.onload = function() {
      // this will fire after the entire page is loaded, including images
      self.searchModel.set('loading', false);
    };

  },
  initFilter: function() {
    this.initFilterView();
  },

  initListOfHeroes: function() {
    var self = this;

    this.listOfHeroesCollection = new ListOfHeroesCollection();
    this.listOfHeroesCollection.fetch({
      reset:true,
      success: function(response) {
        // self.initViews();
        self.initialListOfHeroesCollection = new ListOfHeroesCollection(response.models);
      }
    });
    this.initListOfHeroesView();

  },

  initListOfHeroesView: function() {
    this.listOfHeroesView = new ListOfHeroesView({
      collection: this.listOfHeroesCollection
    });
    this.view.getRegion('heroesRegion').show(this.listOfHeroesView.render());
  },

  initSearchView: function() {
    this.searchView = new SearchView({
      model: this.searchModel
    });
    this.view.getRegion('searchRegion').show(this.searchView.render());

  },

  initFilterView: function() {
    this.filterCollection = new FilterCollection([{
        'categories': 'Heroes',
        'selected': false
      }, {
        'categories': 'Villains',
        'selected': false
      }, {
        'categories': 'Women',
        'selected': false
      }, {
        'categories': 'X-Men',
        'selected': false
      }]

    );
    this.filterView = new FilterView({
      collection: this.filterCollection
    });
    this.view.getRegion('filterRegion').show(this.filterView.render());

  },

  filterCollectionFromSearch: function(userInput) {
    var self = this;

    this.listOfHeroesCollection.reset(this.initialListOfHeroesCollection.models);
    var searchedCollection = _.filter(this.listOfHeroesCollection.models, function(item) {
      return item.get('character').name.toLowerCase().indexOf(userInput) !== -1;
    });
    this.listOfHeroesCollection.reset(searchedCollection);
    setTimeout(function() {
      self.searchModel.set('loading', false);
    }, 100);

  },

  isDisplayedWithFilter: function(model) {
    var result = false,categoriesFromModel = [];

    this.filterCollection.models.forEach(function(filter) {
      try {
        categoriesFromModel = model.get('character').wiki.categories;
      } catch (e) {
        console.log('Error', e);
      }
      if (filter.get('selected') === true && _.contains(categoriesFromModel, filter.get('categories')) === true) {
        result = true;
        return;
      }
    });
    return result;
  },


  filterCollectionFromFilter: function() {
    var filteredCollection = this.initialListOfHeroesCollection.chain()
      .filter(_.bind(this.isDisplayedWithFilter, this))
      .value();
    console.log('filteredCollection', filteredCollection);
     this.listOfHeroesCollection.reset(filteredCollection);
     if(filteredCollection.length === 0){
      this.listOfHeroesCollection.reset(this.initialListOfHeroesCollection.models);
     }
  },

  initEventListener: function() {
   this.listenTo(this.filterView, 'childview:filter:value:changed', this.filterCollectionFromFilter);
    this.listenTo(this.searchView, 'search:value:changed', this.filterCollectionFromSearch);

  }


});

// marvelCollectionView(filterCollection)
