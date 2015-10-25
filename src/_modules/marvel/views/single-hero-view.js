var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');
var tpl = require('../templates/single-hero.hbs');
var vent = require('../../../_scripts/events');


module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'single-hero-container',
  el: '.marvel-app',
  template: tpl,
  // id:this.model.get('id'),
  initialize: function(model) {

    //this.options.id = options.id;
    console.log('Single-hero-view - Initialize');
    console.log('Single-hero-view - Initialize - options', this.model.get('id'));
    //vent.on('heroView:show', this.show, this); //other.on(event, callback, object)

    $('.page').attr('data-page', 'single-page');
    this.renderHelper();

    this.model.fetch();
    this.listenTo(this.model, 'sync', this.render);
  },

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

  setParallaxBg: function() {
    var parallax = $('.hero-name')[0];
    var speed = -0.3;
    window.onscroll = function() {
      var yOffset = window.pageYOffset;
      var percentOffset = 30 - (yOffset / speed)/100;
      parallax.style.backgroundPosition = "0px " + percentOffset + "%";
    };
  },


  afterRender: function() {
    var _this = this;
    console.log('afterRender');
    $(document).scrollTop(0);
    this.setParallaxBg();


  },
  render: function() {
    console.log('Single-hero-view - render');
    console.log('Single-hero-view - render - this.model', this.updatedModel());
    this.$el.html(this.template(this.updatedModel()));
    return this;
  },
  // show: function(id) {
  //   console.log('Single-hero-view - show - showing the hero with the id ', id);
  // },
  updatedModel: function() {
    return {
      character: this.model.get('character'),
    };
  }


});
