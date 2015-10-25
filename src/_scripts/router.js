'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var Homepage = require('../_modules/marvel/views/homepage-view');
var SingleHeroView = require('../_modules/marvel/views/single-hero-view');
var SingleHeroModel = require('../_modules/marvel/models/character');
var vent = require('./events');
var ApplicationRouter = Backbone.Router.extend({
  routes: {
    '': 'index', //default route
    'show': 'show', //index.html#show
    'page/:id': 'page', // matches index.html#page/id where wildcard id can be any id
    'hero/:id': 'showHero',
    'download/*filename': 'download', //matches any route that starts with #download/
    'search/:query': 'search',
    '*other': 'default' //Any route that didnt match before will trigger that method
  },

  index: function() {
    console.log('ROUTER - INDEX - Router has been initiated');
    var homepage = new Homepage();
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
    var HeroModel = new SingleHeroModel({id:heroId});
    var singleHeroView = new SingleHeroView({model:HeroModel});
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
