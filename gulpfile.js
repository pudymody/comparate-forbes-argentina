const { src, dest, parallel } = require('gulp');
const postcss = require('gulp-postcss')
const cleanCSS = require('gulp-clean-css');

function styles(cb) {
  return src('src/style.css')
    .pipe(postcss([
      require('tailwindcss'),
	]))
    .pipe(cleanCSS())
    .pipe(dest('docs/'))
}

function files(cb){
	return src(["src/**/*", "!src/style.css"])
		.pipe( dest("docs/") )
}

exports.default = parallel(styles, files)