'use strict';
var Homepage = require('./views/homepage-view');

// Constructor
module.exports = function(options) {
   console.log('/views/marvel',options);
  return {

      view : new Homepage(options),

      getView: function() {
          return this.view;
      }

  }
};
