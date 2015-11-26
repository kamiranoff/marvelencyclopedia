var Marionette = require('backbone.marionette');
var tpl = require('./../templates/no-hero-in-list-tpl.hbs');
module.exports = Marionette.ItemView.extend({
  template:tpl,
  className:'no-hero-container',
  initialize:function(){
    console.log('LIST OF HEROES - NO HERO VIEW - Initialize');
  }
});
