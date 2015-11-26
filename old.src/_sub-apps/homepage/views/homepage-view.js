'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('./../templates/homepage-template.hbs');
var CollectionView = require('./collection-view');
module.exports = Marionette.LayoutView.extend({
  template: tpl,

  className: 'homepage-container',

  regions: {
    charList: '[data-region="character-list"]'
  },


  onAttach: function() {
    console.log('HOMEPAGE VIEW onAttach',this.charList);

    this.collectionView = new CollectionView({
      collection: this.collection
    });

    this.charList.show(this.collectionView);
  }

});
