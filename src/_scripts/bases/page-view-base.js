'use strict';
var Backbone = require('backbone');

var PageView = Backbone.View.extend({

    render: function(options) {

        this.$el.addClass('page');


      return this;
    },


});

module.exports = PageView;
