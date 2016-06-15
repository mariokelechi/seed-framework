// Tasks :: Build
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

// Default task
gulp.task('build', function(callback) {
  runSequence(
    'verify-dependencies',
    'sass-base',
    'sass-minify'
  );
});

