// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');

var App = require('./app');
var MarvelCollection = require('../_modules/marvel/collections/marvelapi-collection');

$(function() {
  console.log("Starting app marvel...");
  var app = new App();


});
