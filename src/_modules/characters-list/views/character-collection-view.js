'use strict';

var Marionette = require('backbone.marionette');
var CharacterInListView = require('./character-in-list-view');


module.exports = Marionette.CollectionView.extend({
  childView: CharacterInListView,

  tagName: "ul",
  className: 'last-ndr-infos',

  collectionEvents: {
    "change": "render"
  },

  onRender: function() {},
  renderHelper: function() {
    //RENDER CALLBACK HELPER
    _.bindAll(this, 'beforeRender', 'render', 'afterRender');
    var _this = this;
    this.render = _.wrap(this.render, function(render) {
      _this.beforeRender();
      render();
      _this.afterRender();
      return _this;
    });
  },

  beforeRender: function() {
    console.log('beforeRender');
  },

  setBgColorToTitleFromPic: function(img, targetEl, commonParent) {
    var currentElement, vibrant, swatch, $targetEl;
    $(img).hover(function(e) {
      currentElement = e.currentTarget;
      currentElement.crossOrigin = "Anonymous";

      vibrant = new Vibrant(currentElement);
      swatch = vibrant.swatches();
      this.vibrantColorHex = swatch.Vibrant.getHex();

      $targetEl = $(this).closest(commonParent).find(targetEl);
      $targetEl.css('background', this.vibrantColorHex);

    }, function() {
      $targetEl.removeAttr('style');
      $targetEl.css({
        'border-bottom': '2px solid ' + this.vibrantColorHex,
        'padding-top': '8px'
      });
    });
  },

  afterRender: function() {
    console.log('afterRender');
    this.setBgColorToTitleFromPic('.character-link img', '.name', '.single-hero-link');

  },

})
