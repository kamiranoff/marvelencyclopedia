var MarvelModel = require('../models/characterModel.js');

exports.create = function(req, res) {
  var entry = new MarvelModel({
    character: {
      name: req.body.name,
      description: req.body.description,
      thumbnail: req.body.thumbnail
    }
  });
};
