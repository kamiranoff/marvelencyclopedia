'use strict';

var path = require('path');
var consolidate = require('gulp-consolidate');
var getUnicode = require('../unicode/get-unicode.js');
var fontName = 'flaticon';

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var configSrc = config.directories.source;
  var app = {
    front: configSrc + '/_icons/',
    assets: configSrc + '/fonts/'
  };
  var template = 'icon-flaticon';

  gulp.task('icon', function() {
    return gulp.src([path.resolve(app.front + 'templates/svg/**/*.svg')])
      .pipe(plugins.iconfont({
        fontName: fontName, // required
        normalize: true,
        appendUnicode: false,
        startUnicode: getUnicode(path.resolve(app.front + 'templates/svg/'))
      }))

      .on('glyphs', function(glyphs, options) {
        options = {
          glyphs: glyphs,
          fontName: fontName,
          fontPath: '', // set path to font (from your CSS file if relative)
          className: 'flaticon', // set class name in your CSS
          fontHeight: 1001,
          centerHorizontally: false
        };
        gulp.src(path.resolve(app.front + 'templates/' + template + '.css'))
          .pipe(consolidate('lodash', options))
          .pipe(gulp.dest(path.resolve(app.assets + '/icons'))); // set path to export your CSS

        // if you don't need sample.html, remove next 4 lines
        gulp.src(path.resolve(app.front + 'templates/' + template + '.html'))
          .pipe(consolidate('lodash', options))
          .pipe(gulp.dest(path.resolve(app.assets + 'icons'))); // set path to export your sample HTML
        })
        .pipe(gulp.dest(path.resolve(app.assets + 'icons'))); // set path to export your fonts
  })

};
