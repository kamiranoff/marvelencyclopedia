var Backbone = require('backbone');


module.exports = Backbone.Model.extend({

  defaults: {
     sample:'Sample SUB APP'
  },

  urlRoot: function() {
    return "/sample/model";
  },

  initialize: function(options) {
    console.log("sample-model - initialize");
  },

});
