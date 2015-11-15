'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/sample-template.hbs');


module.exports = Marionette.LayoutView.extend({
  template: tpl,

  className: 'grandma-container',


  regions: {
    sampleRegion: '[data-region="sample-region"]'
  },

  initialize: function(options) {


    this.render();


  },

});
