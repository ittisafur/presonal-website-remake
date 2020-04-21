const { gulp, series, dest } = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const cleancss = require("gulp-clean-css");
const browserSync = require("browser-sync").create();
const cache = require("gulp-cached");

function style() {
  return gulp
    .src("src/sass/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(cleancss())
    .pipe(sourcemaps.write("."))
    .pipe(dest("src/css"))
    .pipe(browserSync.stream());
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function watch() {
  browserSync.init({
    server: {
      baseDir: "./src",
      index: "index.html",
    },
  });
  gulp.watch("src/sass/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.default = watch;
