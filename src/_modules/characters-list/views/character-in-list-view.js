'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/character.hbs');
var $ = require('jquery');
var _ = require('lodash');
var vibrant = require('../../../_scripts/vibrant-custom/vibrant.js');


module.exports = Marionette.ItemView.extend({
  className: 'single-hero-link',
  template: tpl,
  modelEvents: {
    "change": "render"
  },
  onRender: function() {
    this.$('img').on('load', _.bind(this.onLoad, this));
  },
  onLoad: function() {
    this.setBgColorToTitleFromPic('.character-link img', '.name', '.single-hero-link');
  },

  setBgColorToTitleFromPic: function(img, targetEl, commonParent) {
    var currentElement, vibrant, swatch, $targetEl;
    var $image = this.$el.find(img);
    $image.hover(function(e) {
      currentElement = e.currentTarget;
      currentElement.crossOrigin = "Anonymous";

      vibrant = new Vibrant(currentElement);
      swatch = vibrant.swatches();
      this.vibrantColorHex = swatch.Vibrant.getHex();

      $targetEl = $(this).closest(commonParent).find(targetEl);
      $targetEl.css('background', this.vibrantColorHex);

    }, function() {
      if (typeof($targetEl) !== 'undefined') {
        $targetEl.removeAttr('style');
        $targetEl.css({
          'border-bottom': '2px solid ' + this.vibrantColorHex,
          'padding-top': '8px'
        });

      }
    });
  },

  // updatedModel: function() {
  //   return {
  //     character: this.model.get('character'),
  //     _id: this.model.get('_id'),
  //     id:this.model.id,
  //     cid:this.model.get('cid')
  //   };
  // },
  // ui: {
  //   backButton: 'go-back'
  // },

  // events: {
  //   'click @ui.backButton': 'return',
  // },

  // templateHelpers: function() {
  //   return {
  //     title : this.options.title
  //   }
  // },
  //  render : function() {
  //    this.$el.html(this.template(this.model));
  //  }

});
