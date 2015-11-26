'use strict';

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var Application = require('./application/application');

var HeaderService = require('./../_modules/header/header-service');
var listOfHeroesService = require('./../_modules/list-of-heroes/list-of-heroes-service');

// start the marionette inspector
// if (window.__agent) {
//   window.__agent.start(Backbone, Marionette);
// }

var app = new Application();

var headerService = new HeaderService();
headerService.setup({
  container: app.layout.header
});

var listOfHeroesService = new listOfHeroesService();
listOfHeroesService.setup({
  container: app.layout.content
});


Backbone.history.start();
