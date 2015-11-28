var Service = require('backbone.service');

var SingleHeroView = require('./views/single-hero-page-view');
var SingleHeroPageModel = require('./models/single-hero-page-model');
module.exports =  Service.extend({

  setup:function(options) {
    console.log('SINGLE HERO SERVICE - setup',options);
    this.container = options.container;
    this.start(options);
  },

  start:function(options) {
    this.options = options;
    console.log('SINGLE HERO SERVICE - start',this.options);

    this.initData(this.options.id);

    this.view = new SingleHeroView({
      model:this.singleHeroPageModel
    });
    this.container.show(this.view);
  },

  initData:function(id){
    console.log('SINGLE HERO SERVICE - initData - id',id);
    this.singleHeroPageModel = new SingleHeroPageModel(id);
    this.singleHeroPageModel.fetch();
  }
});
