/*=====================================
=            ROUTER OBJECT            =
=====================================*/
//Router object all to use all these method in contain environment
// - use
// - param
// - verb / all
// - route
var express = require('express'),
  APIv1 = require('../api/apiv1.js'), //require router 1
  APIv2 = require('../api/apiv2.js'); //require router 2
MarvelApi = require('../api/marvel/marvel.js'); //require router 2
ComicvineApi = require('../api/comicvine/comicvine.js'); //require router 2


module.exports = function(app, configEnv) {

  console.log('ROUTER', configEnv);

  var router = express.Router({
    caseSensitive: false, //default option
    strict: true //default option
  });

  router.use(function(req, res, next) {
    console.log('router specific middleware. Will log in all routers');
    next();
  });

  router.get('/', function(req, res) {
    res.send('router home route');
  });

  //Set the specific route for the router
  app.use('/api', router);

  //Register custom routers from folder ./api/;
  app.use('/api/v1', APIv1);
  app.use('/api/v2', APIv2);


  /*=====================================
  =            MARVEL ROUTER            =
  =====================================*/


  // var marvelRouter = express.Router();
  // marvelRouter.get('/', function(req, res) {
  //   res.send('Marvel home route');
  // });
  // //Set the specific route for the router
  // app.use('/marvelapi', marvelRouter);

  app.use('/marvelapi/characters', MarvelApi);

  /*=====  End of MARVEL ROUTER  ======*/



  /*========================================
  =            COMIC VINE ROUTE            =
  ========================================*/
  // var comicvineRouter = express.Router();
  // comicvineRouter.get('/comicvine', function(req, res) {
  //   res.send('comicvine home route');
  // });

  app.use('/comicvine', ComicvineApi);


  /*=====  End of COMIC VINE ROUTE  ======*/



};
/*-----  End of ROUTER OBJECT  ------*/
