//WATCHING RESTful Web Services with Node.js and Express - 009.Wiring up to MongoDB and Mongoose
var environment = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    env = require('../../config/env')[environment];
var MarvelApi = require('express').Router();
var mongoose = require('mongoose');

var db = mongoose.connect(env.marvelapi);
var Character = require('./models/characterModel');

console.log('MARVEL API',env.marvelapi);

MarvelApi.get('/', function(req, res, next) {

  var query = [];

  if(req.query._id){
    query._id = req.query._id;
  }

  Character.find(query,function(err,characters){
    if(err){
     res.status(500).send(err);
    }else{
      res.json(characters);
    }
  }).limit(10);




});

MarvelApi.get('/id/:characterId', function(req, res, next) {


  Character.findById(req.params.characterId,function(err,results){
    if(err){
     res.status(500).send(err);
    }else{
      res.json(results);
    }
  });

});

MarvelApi.get('/name/:name', function(req, res, next) {


  Character.find({'character.name':req.params.name},function(err,results){
    console.log(req.params);
    if(err){
     res.status(500).send(err);
    }else{
      res.json(results);
    }
  });

});


module.exports = MarvelApi;
