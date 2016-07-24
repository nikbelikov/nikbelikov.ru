var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var browserify = require('browserify');
var vinylSourceStream = require('vinyl-source-stream');
var es = require('event-stream');
var $ = require('gulp-load-plugins')();

gulp.task('copy-bootstrap', function () {
  gulp.src('node_modules/bootstrap-sass/assets/**/*')
    .pipe(gulp.dest('src/sass/bootstrap'));
});

gulp.task('copy-font', function () {
  gulp.src('src/font/*')
    .pipe(gulp.dest('dist/font'));
});

gulp.task('serve', function () {
  browserSync.init({
    server: "./dist"
  });

  gulp.watch('src/jade/**/*.jade', ['jade']);
  gulp.watch(['src/sass/**/*.sass', 'src/sass/**/*.scss'], ['sass']);
  gulp.watch('src/img/**/*', ['webp']);
  gulp.watch('src/js/**/*', ['browserify']);
});

gulp.task('jade', function () {
  return gulp.src('src/jade/*.jade')
    .pipe($.jade({
      //pretty: "    "
    }).on('error', function (err) {
      console.log(err);
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream({once: true}));
});

var postcssPlugins = [
  autoprefixer({
    browsers: ['last 2 versions']
  }),
  cssnano()
];

gulp.task('sass', function () {
  gulp.src('src/sass/**/*.sass')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.rename({
      suffix: ".min"
    }))
    .pipe($.uncss({
      html: ['dist/index.html'],
      ignore: [
        /body\.view.[a-zA-z\s\.:\-()0-9]*/,
        '#bg',
        '.no-webp body',
        '.webp body'
      ]
    }))
    .pipe($.postcss(postcssPlugins))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('csslibs', function () {
  var csslibs = [];

  gulp.src(csslibs)
    .pipe($.concat('libs.min.css'))
    .pipe($.postcss(postcssPlugins))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('cleanImages', function () {
  return gulp.src('dist/img', {read: false})
    .pipe($.clean());
});

gulp.task('images', ['cleanImages'], function () {
  return gulp.src('src/img/**/*')
    .pipe($.imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('webp', ['images'], function () {
  return gulp.src('dist/img/**/*')
    .pipe($.webp({
      quality: 90
    }))
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream({once: true}));
});

gulp.task('uglify', ['browserify'], function () {
  return gulp.src('dist/js/*.js')
    .pipe($.uglify({
      //preserveComments: 'some'
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('browserify', function () {
  var files = [
    'app.js'
  ];
  var tasks = files.map(function (entry) {
    return browserify({
      entries: ['src/js/' + entry],
      debug: true
    })
      .bundle()
      .pipe(vinylSourceStream(entry))
      .pipe($.rename({
        extname: '.bundle.js'
      }))
      .pipe(gulp.dest('dist/js'))
      .pipe(browserSync.stream({once: true}));
  });
  return es.merge.apply(null, tasks);
});

gulp.task('build', ['jade', 'sass', 'csslibs', 'copy-font', 'webp', 'uglify']);
gulp.task('default', ['serve']);
