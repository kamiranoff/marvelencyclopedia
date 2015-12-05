'use strict';
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var LayoutView = require('./layout-view');

var SingleHeroPage = require('./../../_modules/single-hero-page/single-hero-service');
var ListOfHeroesService = require('./../../_modules/list-of-heroes/list-of-heroes-service');


module.exports = Marionette.Object.extend({
  initialize: function(options) {
    console.log('CONTROLLER - Initialize');
    var layout = new LayoutView();
    this.options.layout = layout;
    console.log('CONTROLLER - Initialize layout', layout);
  },

  homepage: function() {
    //TODO: code to start
    console.log('CONTROLLER - Start');
    var layout = this.getOption('layout');
    layout.header.$el.removeClass('small-header');
    var listOfHeroesService = new ListOfHeroesService();
    listOfHeroesService.setup({
      container: layout.content
    });
  },

  /**
   * Initialized on start, without hash
   * @method
   */
  singleHeroPage: function(id) {
    console.log('APPLICATION CONTROLLER - SINGLE HERO PAGE - Initialize id: ', id);
    var layout = this.getOption('layout');
    console.log('APPLICATION CONTROLLER - SINGLE HERO PAGE - Initialize - layout: ');
    layout.header.$el.addClass('small-header');
    var singleHeroPage = new SingleHeroPage();
    singleHeroPage.setup({
      container: layout.content,
      id: id
    });
  },
  singleHeroPageByName: function(name) {
    console.log('APPLICATION CONTROLLER - SINGLE HERO PAGE - Initialize name: ', name);
    var layout = this.getOption('layout');
    console.log('APPLICATION CONTROLLER - SINGLE HERO PAGE - Initialize - layout: ');
    layout.header.$el.addClass('small-header');
    var singeHeroPage = new SingleHeroPage();
    singleHeroPage.setup({
      container: layout.content,
      name: name
    });
  }
});
