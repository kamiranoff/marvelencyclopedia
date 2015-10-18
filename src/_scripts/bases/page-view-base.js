'use strict';
var Backbone = require('backbone');

var PageView = Backbone.View.extend({

    render: function(options) {

      options = options || {};

      if (options.page === true) {
        this.$el.addClass('page');
      }

      return this;
    },

    transitionIn: function (callback) {

      var view = this;
      var delay;

      var transitionIn = function () {
        view.$el.addClass('is-visible');
        view.$el.one('transitionend', function () {
          if (_.isFunction(callback)) {
            callback();
          }
        })
      };

      _.delay(transitionIn, 20);
    },

    transitionOut: function (callback) {

      var view = this;

      view.$el.removeClass('is-visible');
      view.$el.one('transitionend', function () {
        if (_.isFunction(callback)) {
          callback();
        };
      });
    }

});

module.exports = PageView;