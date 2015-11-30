'use strict';
var $ = require('jquery');
var Marionette = require('backbone.marionette');
var HeroInListView = require('./hero-in-list-view');
var NoHeroesView = require('./no-hero-view');
var tpl = require('./../templates/heroes-composite-tpl.hbs');


module.exports = Marionette.CompositeView.extend({
  template: tpl,
  childView: HeroInListView,
  childViewContainer: ".characters-list",
  initialize: function(options) {
    this.filteredArray = options.filteredArray;
    console.log('LIST OF HEROES VIEW -initialize options', options);
  },
  displaySearchedCharacters: function() {
    var heroesListContainer = this.$el.find('.single-hero-link');
    var heroesList = this.$el.find('.character-link');
    var heroName, nameFromData;

    if (typeof(this.filteredArray) !== 'undefined') {
      if (this.filteredArray.length > 0) {
        $(heroesListContainer).addClass('not-visible');

        for (var i = 0; i < this.filteredArray.length; i++) {
          heroName = this.filteredArray[i];

          for (var j = 0; j < heroesList.length; j++) {
            nameFromData = $(heroesList[j]).data('name').toLowerCase().trim();

            if (nameFromData === heroName) {
              $(heroesList[j]).closest('.single-hero-link').removeClass('not-visible');
            }
          }
        }
      }else{
        var noHeroesView = new NoHeroesView()
        noHeroesView.render();
        this.$el.html(noHeroesView.$el);
      }
    }
  },

  onRender: function() {
    this.displaySearchedCharacters();
  },
});
