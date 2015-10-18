'use strict'

var _ = require('lodash');
var Backbone = require('backbone');
var $ = require('jquery');
var ApplicationRouter = require('./router');
var PageView = require('./bases/page-view-base');



var ApplicationView = PageView.extend({
  initialize: function() {
    console.log("ApplicationView : initialize");
    //set dependency on ApplicationRouter
    this.router = new ApplicationRouter();
    //call to begin monitoring uri and route changes
    Backbone.history.start();



  },
  render:function(){
  }


});

module.exports = ApplicationView;
