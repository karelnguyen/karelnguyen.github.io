var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

'node_modules/hamburgers/_sass/hamburgers'
//Set task
gulp.task('default', function() {
  return console.log('hello');
});

gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
})


// 'gulp watch' in command line
gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', ['sass']);
  // Other watchers
})

// npm init
// npm install gulp --save-dev
// npm install gulp-sass --save-dev
//
// gulp 'task-name'
//
//
//
