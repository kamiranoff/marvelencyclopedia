'use strict';

//require dependencies
var $ = require('jquery');
var Marionette = require('backbone.marionette');
var Router = require('./router');

//require Sub App
var HomepageView = require('./views/homepage-view');
//var HomepageModel = require("./models/homepage-model");
//var homepageCollection = require('./collections/homepage-collection');

var CharacterInListModel = require('./models/character-in-list-model');
var CharacterListCollection = require('./collections/character-list-collection');


//require modules
var CharacterListModule = require('../../_modules/characters-list');


module.exports = Marionette.Object.extend({

  initialize: function(options) {
    this.container = options.container;
    this.layout = new HomepageView();

    this.router = new Router({
      controller: this
    });
    this.homepage();
  },

  /**
   *
   * Init Models and collection
   *
   */
  initData: function() {
    this.charcterInListModel = new CharacterInListModel();
    this.characterListCollection = new CharacterListCollection(this.charcterInListModel);
  },

  /**
   *
   * Init views
   *
   */
  initViews: function() {
    this.initCharcterList();
  },

  /**
   *
   * fetching Data
   *
   */
  fetchData: function() {
    this.characterListCollection.fetch({
      success: function() {
        console.log('success');
      }
    });
  },

  homepage: function() {
    console.log('ROUTER - homepage function');
    this.initData();
    this.initViews();

    $(this.container).html(this.layout.$el);

    this.fetchData();
  },

  initCharcterList: function() {
    console.log('HOMEPAGE - index - initHomepage')
    this.characterListModule = new CharacterListModule({
      collection: this.characterListCollection
    });
    this.layout.getRegion('charList').show(this.characterListModule.getView());

  }
});
