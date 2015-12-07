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
        self.initFilter();
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
  initSearchView: function() {
    this.searchView = new SearchView({
      model: this.searchModel
    });
    this.view.getRegion('searchRegion').show(this.searchView.render());

  },

  initFilterView: function() {
    this.filterCollection = new FilterCollection([{
        'categories': 'Heroes'
      }, {
        'categories': 'Villains'
      }, {
        'categories': 'Women'
      }, {
        'categories': 'Men'
      }]

    );
    this.filterView = new FilterView({
      collection: this.filterCollection
    });
    this.view.getRegion('filterRegion').show(this.filterView.render());

  },

  // getListOfTeams: function() {
  //   var listOfTeams = [];

  //   var listOfTeamsCollection = _.filter(this.listOfHeroesCollection.models, function(item) {
  //     if (typeof(item.get('character').wiki) !== 'undefined') {
  //       if (typeof(item.get('character').wiki.groups) !== 'undefined') {
  //         listOfTeams.push(item.get('character').wiki.groups.replace(/\[\[(.+?)\]\]/g, '$1').split(","));
  //       }
  //     }
  //   });
  //   listOfTeams = [].concat.apply([], listOfTeams);
  //   listOfTeams = _.uniq(listOfTeams.map(Function.prototype.call, String.prototype.trim));
  //   var listOfTeamsModel = [];
  //   for(var i = 0;i < listOfTeams.length;i++){
  //     listOfTeamsModel.push({'team':listOfTeams[i]});
  //   }
  //   return listOfTeamsModel;
  // },

  // getListOfCategories: function() {
  //   var listOfTeams = [];
  //   var listOfTeamsModel = [];
  //   var listOfCategories = _.filter(this.listOfHeroesCollection.models, function(item) {
  //     if (typeof(item.get('character').wiki) !== 'undefined') {
  //       if (typeof(item.get('character').wiki.categories) !== 'undefined' && item.get('character').wiki.categories !== null) {

  //         listOfTeams.push(item.get('character').wiki.categories);
  //         listOfTeams = [].concat.apply([], listOfTeams);
  //         listOfTeams = _.uniq(listOfTeams.map(Function.prototype.call, String.prototype.trim));
  //         console.log('listOfTeams', listOfTeams);
  //       }
  //     }
  //   });

  //   for (var i = 0; i < listOfTeams.length; i++) {
  //     listOfTeamsModel.push({
  //       'categories': listOfTeams[i]
  //     });
  //   }
  //   console.log('listOfTeamsModel',listOfTeamsModel);
  //   return listOfTeamsModel;
  // },
  getSearchedCollection: function(userInput) {
    var self = this;
    this.listOfHeroesCollection.reset(this.initialModelsInCollection);
    var searchedCollection = _.filter(this.listOfHeroesCollection.models, function(item) {
      return item.get('character').name.toLowerCase().indexOf(userInput) !== -1;
    });

    console.log('this.searchModel', this.searchModel);
    this.listOfHeroesCollection.reset(searchedCollection);
    setTimeout(function() {
      self.searchModel.set('loading', false);
    }, 100);


  },
  getFilteredCollection:function(array){
    console.log('getFilteredCollection array',array);
  },

  eventsListener: function() {
    this.listenTo(this.searchView, 'search:value:changed', this.getSearchedCollection);
    this.listenTo(this.filterView, 'filter:value:changed', this.getFilteredCollection);

  }


});
