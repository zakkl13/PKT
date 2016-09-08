var gulp = require('gulp')
var rename = require('gulp-rename')
var path = require('path')
var sourcemaps = require('gulp-sourcemaps')
var ts = require('gulp-typescript')
var del = require('del')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var SystemBuilder = require('systemjs-builder')

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

gulp.task('bundle:vendor', ['clean'], function () {
  var mappedPaths = jsNPMDependencies.map(file => { return path.resolve('node_modules', file) })

  // Let's copy our head dependencies into a dist/libs
  var copyJsNPMDependencies = gulp.src(mappedPaths, {base: 'node_modules'})
        .pipe(concat('vendor.js'))
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

gulp.task('build:frontend', ['clean', 'build:app'], function () {
  var copyCss = gulp.src('app/static/styles.css')
    .pipe(gulp.dest('public'))

  var copyTemplates = gulp.src('app/**/*.html')
      .pipe(gulp.dest('public'))

  var copyJpg = gulp.src('app/static/*.jpg')
      .pipe(gulp.dest('public/static'))

  var copyPng = gulp.src('app/static/*.png')
      .pipe(gulp.dest('public/static'))

  var copyGifs = gulp.src('app/static/*.gif')
      .pipe(gulp.dest('public/static'))

  return gulp.src('app/**/*.css')
      .pipe(gulp.dest('public'))
})

gulp.task('copy:vendor', ['clean'], function () {
    gulp.src(
        'node_modules/@angular/**/*'
    )
    .pipe(gulp.dest('public/libs/@angular'))

    gulp.src(
        'node_modules/rxjs/bundles/Rx.js'
    )
    .pipe(gulp.dest('public/libs'))
})

gulp.task('bundle:app', ['clean', 'bundle:vendor', 'build:app'], function () {
  var builder = new SystemBuilder('./', 'app/systemjs.config.js');
  var outputFile = 'public/libs/app.js';
  return builder.buildStatic('app', outputFile);
})

gulp.task('bundle', ['bundle:vendor', 'bundle:app'], function () {
    var vendor_file = 'public/libs/vendor.js'
    var app_file = 'public/libs/app.js'
    var packitup = gulp.src([
        vendor_file ,
        app_file
        ])
    .pipe(concat('bundle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/libs'));

    //var remove_vendor_pack = del(vendor_file);
    //var remove_app_pack = del(app_file);
});

gulp.task('build', ['build:server', 'build:dependencies', 'build:devdependencies', 'build:frontend', 'build:index', 'build:app'])
gulp.task('build:prod', ['build:server', 'build:frontend', 'build:indexprod', 'bundle'])
gulp.task('default', ['build'])

gulp.task('dev:frontend', function () {
    var copyCss = gulp.src('app/static/styles.css')
    .pipe(gulp.dest('public'))

  var copyTemplates = gulp.src('app/**/*.html')
      .pipe(gulp.dest('public'))

  var copyJpg = gulp.src('app/static/*.jpg')
      .pipe(gulp.dest('public/static'))

  var copyPng = gulp.src('app/static/*.png')
      .pipe(gulp.dest('public/static'))

  var copyGifs = gulp.src('app/static/*.gif')
      .pipe(gulp.dest('public/static'))

  var copyIndex = gulp.src('app/static/index.prod.html')
      .pipe(rename('index.html'))
      .pipe(gulp.dest('public'))

    return gulp.src('app/**/*.css')
      .pipe(gulp.dest('public'))
});

gulp.task('dev:ts', function() {
  var tsProject = ts.createProject('app/tsconfig.json')
  var tsResult = gulp.src('app/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
  return tsResult.js
    .pipe(sourcemaps.write())
	.pipe(gulp.dest('public'))
})

gulp.task('test', [], function () {
  return true
})
