'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var Homepage = require('../_sub-apps/homepage');
var SingleHeroView = require('../_modules/marvel/views/single-hero-view');
var SingleHeroModel = require('../_modules/marvel/models/character');
var vent = require('./events');

// Sample
var Sample = require('../_sub-apps/sample');

var ApplicationRouter = Backbone.Router.extend({
  appHolder: '.marvel-app',
  routes: {
    '': 'index', //default route
    'sample': 'sample',
    'show': 'show', //index.html#show
    'page/:id': 'page', // matches index.html#page/id where wildcard id can be any id
    'hero/:id': 'showHero',
    'download/*filename': 'download', //matches any route that starts with #download/
    'search/:query': 'search',
    '*other': 'default' //Any route that didnt match before will trigger that method
  },



  index: function() {
    console.log('ROUTER - INDEX - Router has been initiated');
    var homepage = new Homepage({
      container: this.appHolder
    });
    homepage.router.navigate('', {
      trigger: true,
      replace: true
    });
  },

  sample: function() {
    console.log('sample');
    var sample = new Sample({
      container: this.appHolder
    });
    sample.router.navigate('sample/index', {
      trigger: true,
      replace: true
    });
  },

  show: function() {
    console.log('show route');
  },
  page: function(id) { //id refers to the parameter in the routes object
    console.log('show route with:' + id);
  },
  showHero: function(heroId) { //id refers to the parameter in the routes object
    console.log('ROUTER - showHero - singleHero route with:' + heroId);
    vent.trigger('heroView:show', heroId); //Custom events
    var HeroModel = new SingleHeroModel({
      id: heroId
    });
    var singleHeroView = new SingleHeroView({
      model: HeroModel
    });
  },
  download: function(filename) { //id refers to the parameter in the routes object
    console.log('download route with:' + filename);
  },
  search: function(query) {

  },
  default: function() {
    console.log('ROUTER - default - 404');
  }
});

module.exports = ApplicationRouter;
