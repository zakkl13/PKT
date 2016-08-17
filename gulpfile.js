// Source: [http://blog.edenmsg.com/angular2-typescript-gulp-and-expressjs/](http://blog.edenmsg.com/angular2-typescript-gulp-and-expressjs/)

var gulp = require('gulp')
var rename = require('gulp-rename')
var path = require('path')
var sourcemaps = require('gulp-sourcemaps')
var ts = require('gulp-typescript')
var del = require('del')
var concat = require('gulp-concat')
var minify = require('gulp-minify')

// SERVER
gulp.task('clean', function () {
  del('built_server')
  return del('public')
})

gulp.task('build:server', ['clean'], function () {
  var tsProject = ts.createProject('server/tsconfig.json')
  var tsResult = gulp.src('server/**/*.ts')
    .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
  return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('built_server'))
})

// CLIENT
var jsNPMDependencies = [
  'core-js/client/shim.min.js',
  'zone.js/dist/zone.js',
  'reflect-metadata/Reflect.js',
  'systemjs/dist/system.src.js'
]

gulp.task('build:dependencies', ['clean'], function () {
  var mappedPaths = jsNPMDependencies.map(file => { return path.resolve('node_modules', file) })

  // Let's copy our head dependencies into a dist/libs
  var copyJsNPMDependencies = gulp.src(mappedPaths, {base: 'node_modules'})
      .pipe(minify({
          ext: {
              src: '.js',
              min: '.min.js'
          },
          ignoreFiles: ['.min.js']
      }))
      .pipe(gulp.dest('public/libs'))

  return copyJsNPMDependencies;
})

gulp.task('build:devdependencies', ['build:dependencies'], function () {
    var copyAngular = gulp.src(['node_modules/@angular/**/*'])
                    .pipe(gulp.dest('public/libs/@angular'))

    var copyRxjs = gulp.src(['node_modules/rxjs/**/*'])
                    .pipe(gulp.dest('public/libs/rxjs'))

  var copySysJsConfig = gulp.src('app/systemjs.config.js')
      .pipe(gulp.dest('public'))
})

gulp.task('build:app', ['clean'], function () {
  var tsProject = ts.createProject('app/tsconfig.json')
  var tsResult = gulp.src('app/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
  return tsResult.js
    .pipe(sourcemaps.write())
	.pipe(gulp.dest('public'))
})

gulp.task('build:index', ['clean'], function () {
  var copyIndex = gulp.src('app/static/index.html')
      .pipe(gulp.dest('public'))
})

gulp.task('build:indexprod', ['clean'], function () {
  var copyIndex = gulp.src('app/static/index.prod.html')
      .pipe(rename('index.html'))
      .pipe(gulp.dest('public'))
})

gulp.task('build:frontend', ['clean'], function () {


  var copyCss = gulp.src('app/static/styles.css')
    .pipe(gulp.dest('public'))

  var copyTemplates = gulp.src('app/**/*.html')
      .pipe(gulp.dest('public'))

  var copyJpg = gulp.src('app/static/*.jpg')
      .pipe(gulp.dest('public/static'))

  var copyPng = gulp.src('app/static/*.png')
      .pipe(gulp.dest('public/static'))

  return gulp.src('app/**/*.css')
      .pipe(gulp.dest('public'))
})

gulp.task('deploy_prep', ['build:prod'], function() {
    return del('node_modules');
})

gulp.task('build', ['build:server', 'build:dependencies', 'build:devdependencies', 'build:frontend', 'build:index', 'build:app'])
gulp.task('build:prod', ['build:server', 'build:dependencies', 'build:frontend', 'build:indexprod', 'build:app'])
gulp.task('default', ['build'])

gulp.task('test', [], function () {
  return true
})
