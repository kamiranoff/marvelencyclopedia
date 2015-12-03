var fs = require('fs');


var loopThroughFolder = function(folder) {
  var fs = require('fs');
  var regex = /^(u[0-9a-fA-F]{4}-.*\.svg)$/;
  var defaultValue = parseInt("EA01", 16);
  var max = 0;
  var current = 0;
  var files = new Array();
  try {
    files = fs.readdirSync(folder);
  } catch (error) {
    console.log('error' + error)
    max = defaultValue;
  }

  files.forEach(function(file) {
    if (regex.test(file)) {
      current = parseInt(file.substr(1, 4), 16);
      if (current > max) {
        max = current;
      }
    }
  });
  return max.toString(16).toUpperCase();
};


var addToHex = function(x, y) {
  x = parseInt(x, 16) + y;
  return x.toString(16).toUpperCase();
};

module.exports =  function(folder) {
  var maxHex = loopThroughFolder(folder);
  console.log(folder);
  return Number("0x" + addToHex(maxHex, 1));
};
