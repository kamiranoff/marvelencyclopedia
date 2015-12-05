'use strict';

var Marionette = require('backbone.marionette');

module.exports = Marionette.AppRouter.extend({
  // "someMethod" must exist at controller.someMethod
  //
  initialize:function(options){
    console.log('APPLICATION ROUTER - initialize',options);
  },
  appRoutes: {
    "character/:id": "singleHeroPage",
    "character/:name": "singleHeroPageByName",
    "":"homepage"
  },


});
