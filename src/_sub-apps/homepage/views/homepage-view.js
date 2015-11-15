'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/homepage-template.hbs');


module.exports = Marionette.LayoutView.extend({
  template: tpl,

  className: 'homepage-container',


  regions: {
    charList: '[data-region="character-list"]'
  },

  initialize: function(options) {


    this.render();


  },

});
