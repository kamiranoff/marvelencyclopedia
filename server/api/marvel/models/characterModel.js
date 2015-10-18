var mongoose = require('mongoose'),
  Schema = mongoose.Schema;





var characterSchema = new Schema({
  character:{
    name:{type:String},
    description:{type:String},
    thumbnail:{
      path:{type:String},
      extentions:{type:String}
    }
  }
});

module.exports = mongoose.model('Character',characterSchema);
