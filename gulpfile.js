  const { src,watch,dest,series } = require('gulp')
  const sass = require('gulp-sass')(require('sass'))
  const purgecss = require('gulp-purgecss')

  function buildStyles(){
      return src('felix/**/*.scss')
      .pipe(sass())
      .pipe(purgecss({content:['*.html']}))
      .pipe(dest('./css'))
  }

  function watchTask(){
    
    watch(['felix/**/*.scss'],buildStyles)
  }

  exports.default = series(buildStyles,watchTask)
  exports.build = series(buildStyles)
