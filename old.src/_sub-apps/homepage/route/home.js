var Route = require('backbone-routing').Route;
var HomepageView = require('./../views/homepage-view');
var storage = require('./../storage');
var Marionette = require('backbone.marionette');
var MyCollection = require('./../collections/character-list-collection')
module.exports = Route.extend({
  initialize: function(options) {
    console.log('HOMEPAGE Route initialize', options);
    this.myCollection = new MyCollection();
    this.container = options.container;
    var self = this;
    this.myCollection.fetch();

    this.homepageView = new HomepageView({
      collection: this.myCollection
    });
    this.render();
  },

  fetchData: function() {
    var _this = this;
    return storage.findAll().then(function(collection) {
      _this.collection = collection;
    });
  },

  render: function(params) {
    console.log('HOMEPAGE Route render', this.container);
    console.log('HOMEPAGE Route render - this.collection', this.myCollection);

    this.container.show(this.homepageView);
  }
});
