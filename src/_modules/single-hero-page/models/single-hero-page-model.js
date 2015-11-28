"use strict";
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {},
  initialize:function(id){
    console.log('SINGLE HERO MODEL - initialize id',id);
    this.id=id;
  },
  url: function() {
    return '/marvelapi/characters/'+this.id;
  }
});
