var mongoose = require('mongoose'),
  Schema = mongoose.Schema;





var characterSchema = new Schema({
  character: {
    name:{type:Object},
    thumbnail: {
      path: {
        type: String
      },
      extentions: {
        type: String
      }
    },
    wiki: {
      type: Object
    },
    description: {
      type: String
    }
  }
});

module.exports = mongoose.model('Character', characterSchema);
