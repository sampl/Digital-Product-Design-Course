var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var path = require('path');

gulp.task('less', function() {
    return gulp.src('./main.less')  // only compile the entry file
    	.pipe(less({
	      paths: [ path.join(__dirname, 'less', 'includes') ]
	    }))
      .pipe(gulp.dest('./'))
});
gulp.task('watch', function() {
    gulp.watch('./*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['watch']); // Default will run the 'entry' watch task