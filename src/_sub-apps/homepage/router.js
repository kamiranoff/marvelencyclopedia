var Marionette = require('backbone.marionette');
var Router = require('backbone-routing').Router;

var HeaderService = require('./../../_modules/header/service/header-service');

var IndexRoute = require('./route/route');

module.exports = Router.extend({
  routes: {
    '': 'showHomepage',
  },
  initialize: function(options) {
    console.log('HOMEPAGE Router initialize', options);
    this.container = options.container;
    this.showHomepage();
  },
  onBeforeEnter: function() {

  },

  showHomepage: function() {
    console.log('HOMEPAGE router.js showHomage',this.container);
    return new IndexRoute({
      container: this.container
    });
  },
});
