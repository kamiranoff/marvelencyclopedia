'use strict';
var Service = require('backbone.service');


module.exports = Service.extend({
  initialize:function(){
    this.listenTo(this.filterView, 'filter:value:changed', this.getFilteredCollection);
    console.log('initalize - getFilteredCollection array',array);
  },
   getFilteredCollection:function(array){
    console.log('getFilteredCollection array',array);
  }
});
