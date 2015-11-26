'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var _ = require('lodash');


var LayoutView = require('./views/layout-view');

var Radio = require('backbone.radio');
var routerChannel = Radio.channel('router');

module.exports = Marionette.Application.extend({
  initialize: function() {
    this.$body = $(document.body);
    this.layout = new LayoutView();
    this.layout.render();

    this.listenTo(routerChannel, {
      'before:enter:route': this.onBeforeEnterRoute,
      'enter:route': this.onEnterRoute,
      'error:route': this.onErrorRoute
    });
  },
  onBeforeEnterRoute: function() {
    console.log('Application - onBeforeEnterRoute');
  },

  onEnterRoute: function() {
    console.log('Application - onEnterRoute');
    this.$body.scrollTop(0);

  },

  onErrorRoute: function() {
    console.log('Application - onErrorRoute');
  }

});


var mixinTemplateHelpers = function(target) {
  var self = this;
  var templateHelpers = Marionette.getOption(self, 'templateHelpers');
  var result = {};

  target = target || {};

  if (_.isFunction(templateHelpers)) {
    templateHelpers = templateHelpers.call(self);
  }

  // This _.each block is what we're adding
  _.each(templateHelpers, function(helper, index) {
    if (_.isFunction(helper)) {
      result[index] = helper.call(self);
    }
    else
    {
      result[index] = helper;
    }
  });

  return _.extend(target, result);
};

Backbone.Marionette.ItemView.prototype.mixinTemplateHelpers = mixinTemplateHelpers;
Backbone.Marionette.CompositeView.prototype.mixinTemplateHelpers = mixinTemplateHelpers;
Backbone.Marionette.CollectionView.prototype.mixinTemplateHelpers = mixinTemplateHelpers;
