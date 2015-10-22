var _ = require('lodash');
var Backbone = require('backbone');
var $ = require('jquery');
var Router = require('./router');

MarvelApp = {
  Models: {},
  Controllers: {},
  Views: {},
  Routers: {},
  Events: {},
  Languages: {}
};


$(document).ready(function() {
  Bootstrap.i18nLoader(function loadI18n() {
    console.log("ApplicationView : initialize");
    //set dependency on ApplicationRouter
    MarvelApp.Router.ApplicationRouter = new Router();
    //call to begin monitoring uri and route changes
    Backbone.history.start();
    MarvelApp.swiftclick = SwiftClick.attach(document.body);
  });
});
