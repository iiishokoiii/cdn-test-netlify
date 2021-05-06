// gulpプラグインの読み込み
const gulp = require("gulp");
const bs = require("browser-sync").create();


gulp.task("sync", function (cb) {
  bs.init({
    server: {
      baseDir: "./public/",
      index: "index.html",
    },
    notify: false,
  });
  cb();
});

gulp.task("default", gulp.series("sync"));
