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
      success: function(response) {
        // self.initViews();
        self.initialModelsInCollection = response.models;
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
        'selected':false
      }, {
        'categories': 'Villains',
        'selected':false
      }, {
        'categories': 'Women',
        'selected':false
      }, {
        'categories': 'Men',
        'selected':false
      }]

    );
    this.filterView = new FilterView({
      collection: this.filterCollection
    });
    this.view.getRegion('filterRegion').show(this.filterView.render());

  },

  getSearchedCollection: function(userInput) {
    var self = this;
    this.listOfHeroesCollection.reset(this.initialModelsInCollection);
    var searchedCollection = _.filter(this.listOfHeroesCollection.models, function(item) {
      return item.get('character').name.toLowerCase().indexOf(userInput) !== -1;
    });
    this.listOfHeroesCollection.reset(searchedCollection);
    setTimeout(function() {
      self.searchModel.set('loading', false);
    }, 100);

  },

  getFilteredCollection: function() {
    this.listOfHeroesCollection.reset(this.initialModelsInCollection);
    console.log(this.listOfHeroesCollection);
    var filteredFilterCollection = _.pluck(_.pluck(_.filter(this.filterCollection.models,function(item){
      return item.attributes.selected;
    },true),'attributes'),'categories');

    var filteredListOfHeroesCollection = _.filter(this.listOfHeroesCollection.models,function(item){
      try{
        if(_.intersection(item.attributes.character.wiki.categories,filteredFilterCollection).length > 0){
          return item;
        }
      }catch(e){
        console.log(e);
      }
    });

    if(filteredListOfHeroesCollection.length >0){
      this.listOfHeroesCollection.reset(filteredListOfHeroesCollection);
    }else{
      this.listOfHeroesCollection.reset(this.initialModelsInCollection);
    }
  },

  initEventListener: function() {
    this.listenTo(this.filterView, 'childview:filter:value:changed', this.getFilteredCollection);
    this.listenTo(this.searchView, 'search:value:changed', this.getSearchedCollection);

  }


});
