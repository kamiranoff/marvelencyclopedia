var Marionette = require('backbone.marionette');
var tpl = require('./layout-template.hbs');

module.exports = Marionette.LayoutView.extend({
  el: '.application',
  template: tpl,

  regions: {
    header: '.application__header',
    content: '.application__content',
    footer: '.application__footer'
  }
});
