var Service = require('backbone.service');

var HeaderView = require('./views/header-view');
var HeaderModel = require('./models/header-model');
module.exports =  Service.extend({

  setup:function(options) {
    console.log('HEADER SERVICE - setup',options);
    this.container = options.container;
    this.start();
  },

  start:function() {
    console.log('HEADER SERVICE - start');
    this.initData();
    this.view = new HeaderView({
      model:this.headerModel
    });
    this.container.show(this.view);
  },

  initData:function(){
    this.headerModel = new HeaderModel();
  }
});
