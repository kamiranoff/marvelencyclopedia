'use strict';

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var _ = require('lodash');
var AppLayout = require('./views/app-layout.js');
var Radio = require('backbone.radio');

module.exports = Marionette.Application.extend({
  initialize: function() {
    this._subApp = [];
    this.appLayout = new AppLayout();
    this.channel = new Radio.channel('app');

  },

  addSubApp: function(name, klass ,options) {
    _.extend(options, {parentChannel: this.channel });
    var module = new klass(options);

    this._subApp[name] = module;
  },

  getAppLayout: function() {
    return this.appLayout;
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

