var Service = require('backbone.service');

var ListOfHeroesView = require('./views/list-of-heroes-view');
var ListOfHeroesCollection = require('./collections/list-of-heroes-collection');
module.exports =  Service.extend({

  setup:function(options) {
    console.log('LIST OF HEROES SERVICE - setup',options);
    this.container = options.container;
    this.start();
  },

  start:function() {
    console.log('LIST OF HEROES SERVICE - start');
    this.initData();
    this.view = new ListOfHeroesView({
      collection:this.listOfHeroesCollection
    });
    this.container.show(this.view);
  },

  initData:function(){
    this.listOfHeroesCollection = new ListOfHeroesCollection();
    this.listOfHeroesCollection.fetch();
  }
});
