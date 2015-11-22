'use strict'

var _ = require('lodash');
var Backbone = require('backbone');
var $ = require('jquery');
var ApplicationRouter = require('./router');
var PageView = require('./bases/page-view-base');



var ApplicationView = PageView.extend({
  // events: {
  //   'click a.character-link': 'singleCharDisplay'
  // },
  initialize: function() {
    console.log("ApplicationView : initialize");
    //set dependency on ApplicationRouter
    this.router = new ApplicationRouter();
    //call to begin monitoring uri and route changes
    Backbone.history.start({pushState: true });
    // A global a.onclick event handler for all your navigational needs
    // see e.g. Backbone Boilerplate for a more complete example

  },
  render: function() {
  }
    // singleCharDisplay: function(e) {
    //   // e.preventDefault();
    //   console.log(e.currentTarget);
    //   var dataId = $(e.currentTarget).data('id');
    //   console.log(dataId);
    //   console.log(this.collection.get(dataId));
    //   this.router.navigate("hero", true);
    //   var singleHero = new HeroView({model:this.collection.get(dataId)});
    //   this.$el.append(singleHero.$el);
    //   this.renderSingle(singleHero.$el);
    //}


});

module.exports = ApplicationView;
