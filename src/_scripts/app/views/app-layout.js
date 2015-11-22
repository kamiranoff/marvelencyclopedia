var Marionette = require('backbone.marionette');
var tpl = require('../templates/app-layout.hbs');

module.exports = Marionette.LayoutView.extend({
  el: '[data-region="app-holder"]',
  template: tpl,
  initialize: function() {
    this.render();
  },

  regions: {
    header: '[data-region="header"]',
    main: '[data-region="main"]',
    footer: '[data-region="footer"]'
  }
});

