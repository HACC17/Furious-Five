var gulp = require("gulp"),
	plugins = require("gulp-load-plugins")(),
	browserSync = require("browser-sync").create();
	// sass = require("gulp-sass"),
	// autoprefixer = require("gulp-autoprefixer"),
	// cssMin = require("gulp-cssmin"),
	// sourcemaps = require("gulp-sourcemaps");

gulp.task("default", ["css", "js", "watch", "serve"]);

gulp.task("css", function () {
	return gulp.src(["./src/sass/*.scss"])
	.pipe(plugins.sourcemaps.init())
	.pipe(plugins.sass().on("error", plugins.sass.logError))
	.pipe(plugins.cssmin())
	.pipe(plugins.autoprefixer())
	.pipe(plugins.sourcemaps.write())
	.pipe(gulp.dest("./dist/css"))
	.pipe(browserSync.stream());
});

gulp.task("js", function () {
	return gulp.src([
		"./src/js/*.js",
	])
	.pipe(plugins.sourcemaps.init())
	.pipe(plugins.babel({
		presets: ["es2015"]
	}))
	.pipe(plugins.concat("all.js"))
	.pipe(plugins.uglify())
	.pipe(plugins.sourcemaps.write())
	.pipe(gulp.dest("dist/js"))
	.pipe(browserSync.stream());
});

gulp.task("watch", function () {
	gulp.watch(["src/sass/*.scss"], ["css"]);
	gulp.watch(["src/js/*.js"], ["js"]);
});

gulp.task("serve", ["nodemon"], function () {
	browserSync.init({
		proxy: "http://localhost:8000",
		port: 8001,
		files: ["views/*", "views/includes/*"]
		// server: {
		// 	baseDir: "./views"
		// }
	});

	gulp.watch("/views/*.pug").on("change", browserSync.reload);
});

// https://gist.github.com/sogko/b53d33d4f3b40d3b4b2e
gulp.task("nodemon", function () {
	var started = false;
	return plugins.nodemon({
		script: "index.js"
	}).on("start", function () {
		if (!started) {
			cb();
			started = true; 
		} 
	});
});
