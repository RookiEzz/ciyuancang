var gulp = require("gulp"),
	minifyCss = require("gulp-clean-css"),
	uglify = require("gulp-uglify"),
	// htmlmin = require("gulp-htmlmin"),
	sass = require("gulp-sass"),
	livereload = require("gulp-livereload");
//css 压缩
gulp.task("minifyCss",function(){
	gulp.src("css/*.css")
		.pipe(minifyCss())
		.pipe(gulp.dest("dist/css"));
});
//js 压缩
gulp.task("minifyJs",function(){
	gulp.src("js/*.js")
		.pipe(uglify({
			compress : true
		}))
		.pipe(gulp.dest("dist/js"));
});
//html 压缩
// gulp.task("minifyHtml",function(){
// 	gulp.src("index.html")
// 		.pipe(htmlmin({collapseWhitespace: true}))
// 		.pipe(gulp.dest("dist/html"));
// });
//编译 sass
// gulp.task("compileSass",function(){
// 	gulp.src("scss/*.scss")
// 		.pipe(sass({
// 			outputStyle:"compressde"
// 		}))
// 		.pipe(gulp.dest("dist/css"))
// 		.pipe(livereload());
// });
//监视任务
gulp.task("watch",function(){
	livereload.listen();
	//监视.scss文件的修改，自动编译
	// gulp.watch("scss/*.scss",["compileSass"]);
	//监视.html文件的修改
	gulp.watch(["*.html","scss/*.css"],function(ary1){
		livereload.changed(ary1.path);
		
	});
	// gulp.watch("scss/*.css",function(ary){
	// 	livereload.changed(ary.path);
	// });
});
gulp.task("default",["minifyCss","minifyJs","minifyHtml","watch"]);