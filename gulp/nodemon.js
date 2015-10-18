'use strict';

var path = require('path');

var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;

  gulp.task('nodemon', function(cb) {

    var started = false;

    return nodemon({
      script: './server/server.js',
      watch: ['./server/server.js','server/']
    }).on('start', function() {
      // to avoid nodemon being started multiple times
      // thanks @matthisk
      if (!started) {
        cb();
        started = true;
      }
    }).on('restart', function() {
      setTimeout(function() {
        reload({
          stream: false
        });
      }, 400);
    });
  });
}
