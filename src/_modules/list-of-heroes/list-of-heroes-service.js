'use strict';

var Service = require('backbone.service');

var HomepageView = require('./views/homepage-view');

var ListOfHeroesCollection = require('./collections/list-of-heroes-collection');
var ListOfHeroesView = require('./views/list-of-heroes-view');

var FilterView = require('./../filter/views/filter-view');

module.exports = Service.extend({

  setup: function(options) {
    console.log('LIST OF HEROES SERVICE - setup', options);
    this.container = options.container;
    this.start();
  },
  start: function() {
    console.log('LIST OF HEROES SERVICE - start');
    this.view = new HomepageView();
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
        console.log('success',response);
        self.initViews();
      }
    });
  },
  initViews: function(options) {
    this.initListOfHeroesView();
    this.initFilterView(options);
  },

  initListOfHeroesView: function() {
    this.listOfHeroesView = new ListOfHeroesView({
      collection: this.listOfHeroesCollection
    });
    this.view.getRegion('heroesRegion').show(this.listOfHeroesView.render());
  },
  initFilterView: function() {
    this.filterView = new FilterView({collection: this.listOfHeroesCollection});
    this.view.getRegion('filterRegion').show(this.filterView.render());
  },


});
