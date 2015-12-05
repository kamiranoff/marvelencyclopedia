"use strict";
var Backbone = require('backbone');
var FilterModel = require('./../models/filter-model');


module.exports = Backbone.Collection.extend({
  model:FilterModel
});
