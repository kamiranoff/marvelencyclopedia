'use strict';

var Backbone = require('backbone');

var Application = require('./application/application');
var AppController = require('./application/controller');
var MyAppRouter = require('./application/router');

var HeaderService = require('./../_modules/header/header-service');

var app = new Application();

var headerService = new HeaderService();
headerService.setup({
  container: app.layout.header
});


app.addInitializer(function(options) {
  // initialize the router
  var appController = new AppController({});
  console.log('MAIN - addInitializer');
  new MyAppRouter({
    controller: appController
  });
});

// Start Backbone history a necessary step for bookmarkable URL's

app.start({});
Backbone.history.start();
