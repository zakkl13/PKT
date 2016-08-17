// Source: [http://blog.edenmsg.com/angular2-typescript-gulp-and-expressjs/](http://blog.edenmsg.com/angular2-typescript-gulp-and-expressjs/)

var gulp = require('gulp')
var path = require('path')
var sourcemaps = require('gulp-sourcemaps')
var ts = require('gulp-typescript')
var del = require('del')
var concat = require('gulp-concat')

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
/*
  jsNPMDependencies, sometimes order matters here! so becareful!
*/
var jsNPMDependencies = [
  'core-js/client/shim.min.js',
  'zone.js/dist/zone.js',
  'reflect-metadata/Reflect.js',
  'systemjs/dist/system.src.js',
  'moment/moment.js',
  "ng2-bootstrap/bundles/ng2-bootstrap.min.js"
]

gulp.task('build:index', ['clean', 'build:css'], function () {
  var mappedPaths = jsNPMDependencies.map(file => { return path.resolve('node_modules', file) })

  // Let's copy our head dependencies into a dist/libs
  var copyJsNPMDependencies = gulp.src(mappedPaths, {base: 'node_modules'})
      .pipe(gulp.dest('public/libs'))

    var copyAngular = gulp.src(['node_modules/@angular/**/*'])
                    .pipe(gulp.dest('public/libs/@angular'))

    var copyRxjs = gulp.src(['node_modules/rxjs/**/*'])
                    .pipe(gulp.dest('public/libs/rxjs'))

  // Let's copy our index into dist
  var copyIndex = gulp.src('app/static/index.html')
      .pipe(gulp.dest('public'))

  var copyTemplates = gulp.src('app/**/*.html')
      .pipe(gulp.dest('public'))

  var copyTemplateCss = gulp.src('app/**/*.css')
      .pipe(gulp.dest('public'))

  var copyJpg = gulp.src('app/static/*.jpg')
      .pipe(gulp.dest('public/static'))

  var copyPng = gulp.src('app/static/*.png')
      .pipe(gulp.dest('public/static'))

  var copySysJsConfig = gulp.src('app/systemjs.config.js')
      .pipe(gulp.dest('public'))

  return [copyJsNPMDependencies, copyIndex]
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

gulp.task('build:css', ['clean'], function () {
  return gulp.src('app/static/styles.css')
    .pipe(gulp.dest('public'))
})

gulp.task('build', ['build:server', 'build:index', 'build:app'])
gulp.task('default', ['build'])

gulp.task('test', ['build'], function () {
  return true
})

gulp.task('frontend', function () {
  var copyIndex = gulp.src('app/static/index.html')
      .pipe(gulp.dest('public'))

  copyCss = gulp.src('app/static/styles.css')
    .pipe(gulp.dest('public'))

  var copyTemplates = gulp.src('app/**/*.html')
      .pipe(gulp.dest('public'))

  return gulp.src('app/**/*.css')
      .pipe(gulp.dest('public'))
})
