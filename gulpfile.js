var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function() {
    nodemon({
            script: 'index.js',
            ext: 'js',
            env: { port: 5000 },
            ignore: ['./node_modules/**']
        })
        .on('restart', function() {
            console.log('restart');
        });
});