// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// Libraries
var Backbone = require('backbone');

var Application = require('./app');


// Subapps & high level modules
var HeaderApp = require('../_modules/header');
var Homepage = require('../_sub-apps/homepage');


// Application  level
var app = new Application();
var appLayout = app.getAppLayout();

//---------- Adding sub apps

// Module/Header
app.addSubApp('header', HeaderApp, {
  container: appLayout.getRegion('header'),
  title: 'Veggie forest'
});

// Sub app/market
app.addSubApp('market', Homepage, {
  container: appLayout.getRegion('main')
});




app.start();

Backbone.history.start();
