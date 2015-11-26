var $ = require('jquery');
var Marionette = require('backbone.marionette');
var LayoutView = require('./layout-view');


module.exports = Marionette.Application.extend({
  initialize: function() {
    console.log('Application -  initialize');
    this.$body = $(document.body);
    this.layout = new LayoutView();
    this.layout.render();
  },

});
