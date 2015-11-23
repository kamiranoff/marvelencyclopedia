// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// Libraries
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Application = require('./application/application');

// Subapps & high level modules
var HeaderService = require('./../_modules/header/service/header-service');
var IndexRouter = require('./../_sub-apps/homepage/router');

// Application  level
var app = new Application();


//---------- Adding sub apps

// Module/Header
var headerService = new HeaderService();
console.log('headerService',app.layout.header);
headerService.setup({
  container: app.layout.header
});

// $(document).ajaxError(function () {
//   FlashesService.add({
//     type: "danger",
//     title: "Server Error"
//   });
// });

app.index = new IndexRouter({
  container: app.layout.main
});

Backbone.history.start();
