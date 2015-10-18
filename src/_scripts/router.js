'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var Homepage = require('../_modules/marvel/views/homepage-view');
var MarvelCollection = require('../_modules/marvel/collections/marvelapi-collection');

var ApplicationRouter = Backbone.Router.extend({
    routes: {
      '': 'index', //default route
      'show': 'show', //index.html#show
      'page/:id': 'page', // matches index.html#page/id where wildcard id can be any id
      'appointment/:id': 'showAppointment',
      'download/*filename': 'download', //matches any route that starts with #download/
      'search/:query': 'search',
      '*other': 'default' //Any route that didnt match before will trigger that method
    },

    index: function() {
      console.log('ROUTER - INDEX - Router has been initiated');
      var marvelCollection = new MarvelCollection();
      new Homepage({collection: marvelCollection});
    },
    show: function() {
      console.log('show route');
    },
    page: function(id) { //id refers to the parameter in the routes object
      console.log('show route with:' + id);
    },
    showAppointment: function(appointmentId) { //id refers to the parameter in the routes object
      console.log('ROUTER - showAppointment - appointment route with:' + appointmentId);
      vent.trigger('appointment:show', appointmentId); //Custom event
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
