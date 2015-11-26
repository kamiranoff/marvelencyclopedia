var Marionette = require('backbone.marionette');
var tpl = require('../templates/app-layout.hbs');

module.exports = Marionette.LayoutView.extend({
  el: '.application',
  template: tpl,
  regions: {
    header: '.application__header',
    main: '[data-region="main"]',
    footer: '[data-region="footer"]'
  }
});

