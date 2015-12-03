'use strict';
var Marionette = require('backbone.marionette');

var tpl = require('./../templates/filter-tpl.hbs');

var delay = (function() {
  var timer = 0;
  return function(callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

module.exports = Marionette.ItemView.extend({
  template: tpl,
  className: 'filter-view-container',

  ui: {
    searchBox: '.search-box',
    loaderIcon: '.loader-icon'
  },
  events: {
    'input @ui.searchBox': "catchInputEvent"
  },
  initialize: function() {
    console.log('Filter View - initialize');
  },
  modelEvents: {
    'change': 'onRender'
  },
  onRender:function(){
    if(this.model.get('loading') === true){
      this.ui.loaderIcon.addClass('loading');
    }else{
       this.ui.loaderIcon.removeClass('loading');
    }

  },
  catchInputEvent: function() {
    //typing helper
    var self = this;
    this.model.set('loading',true);
    delay(function() {
      self.getTextFromUser();
    }, 800);

  },

  getTextFromUser: function() {
    var userInput = this.ui.searchBox.val().toLowerCase().trim();
    this.emitSearchValueChanged(userInput);

  },

  emitSearchValueChanged: function(string) {
    this.trigger('search:value:changed', string);

  },


});
