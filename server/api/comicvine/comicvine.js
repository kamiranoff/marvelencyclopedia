//WATCHING RESTful Web Services with Node.js and Express - 009.Wiring up to MongoDB and Mongoose
var environment = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    env = require('../../config/env')[environment];
var ComicvineApi = require('express').Router();
//var mongoose = require('mongoose');

// var db = mongoose.connect(env.marvelapi);
// var Character = require('./models/characterModel');
var ComicVineClient = require('comicvine-client');




ComicvineApi.get('/', function(req, res, next) {
// var client = new ComicVineClient({
//     //Example API key, insert your API key here. More info http://api.comicvine.com/
//     apikey: "40ffdec6b2f84ffa415b5f24d289175ae907a6a1",

//     //Base URL for all the API requets. Don't change it unless you are using your own proxy or something like that.
//     apiUrl: "http://api.comicvine.com",

//     //Use redis cache for http requests
//     cache: 'redis',

//     //Redis host
//     host: "192.168.56.2",

//     //Redis port
//     port: 6379,
// });

   res.send('Comicvine home route');




  // var query = [];

  // if(req.query._id){
  //   query._id = req.query._id;
  // }

 // var characterList = Character.find(query,function(err,characters){
 //    var filteredChar = {};
 //    if(err){
 //     res.status(500).send(err);
 //    }else{

 //     // console.log(characters);
 //      //console.log( JSON.stringify(characters));
 //      // filteredChar = {
 //      //   name : characters[0].character.name,
 //      //   thumbnail:characters[0].character.thumbnail,
 //      //   id:characters[0]._id
 //      //  // wiki:characters[0].character.wiki
 //      // };


 //      console.log(characters);
 //      res.json(characters);

 //    }
 //  }).limit(2).sort( { name: 1 } );

//   var characterList = Character.find({},'character.thumbnail character.name character.wiki.categories',function(err,characters){
//     res.json(characters);
//   }).limit(325);

// });

// MarvelApi.get('/:characterId', function(req, res, next) {


//   Character.findById(req.params.characterId,function(err,results){
//     if(err){
//      res.status(500).send(err);
//     }else{
//       res.json(results);
//     }
//   });

// });

// MarvelApi.get('/name/:name', function(req, res, next) {


//   Character.find({'character.name':req.params.name},function(err,results){
//     console.log(req.params);
//     if(err){
//      res.status(500).send(err);
//     }else{
//       res.json(results);
//     }
//   });

 });


module.exports = ComicvineApi;
