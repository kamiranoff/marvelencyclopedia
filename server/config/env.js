var path = require('path');
var rootPath = path.normalize(__dirname + '/../../' );

module.exports = {
  development:{
    db: '',
    chatdb:'mongodb://127.0.0.1/chat',
    marvelapi:'mongodb://127.0.0.1/marvelapi',
    rootPath:rootPath,
    port:process.env.PORT || 2999,
    msgEnv:'development'
  },
  production:{
    db:'',
    chatdb:'',
    rootPath:rootPath,
    port: process.env.PORT || 80,
    msgEnv:'production'
  }
};

