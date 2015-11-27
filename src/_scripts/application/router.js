var Marionette = require('backbone.marionette');

module.exports = Marionette.AppRouter.extend({
  // "someMethod" must exist at controller.someMethod
  appRoutes: {
    "": "index"
  },

  index : function(){
    // do something here.
    console.log('APPLICATION ROUTER - Initialize');

  }

});
