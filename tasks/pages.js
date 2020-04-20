const { src, dest } = require('gulp');
const fileinclude = require('gulp-file-include');
const htmlreplace = require('gulp-html-replace');
const rename = require('gulp-rename');
// Configs
const { mode, config } = require('../project.config');
const { source, build } = config;

const commonReplacement = {
  css: [
    `css/vendors~app${config[mode()].css.vendors.min ? '.min' : ''}.css`,
    `css/app${config[mode()].css.app.min ? '.min' : ''}.css`
  ],
  js: [
    `js/vendors~app${config[mode()].js.vendors.min ? '.min' : ''}.js`,
    `js/app${config[mode()].js.app.min ? '.min' : ''}.js`
  ],
};

/**
 * Copy/Replace root HTML from "src/" to "build/"
 */
const rootPagesHTML = () => {
  return src([`${source}/*.html`])
    .pipe(htmlreplace(commonReplacement))
    .pipe(dest(`${build}`));
};

/**
 * Copy/Replace root PHP from "src/" to "build/"
 */
const rootPagesPHP = () => {
  return src(`${source}/*.php`)
    .pipe(rename({ extname: '.html' }))
    .pipe(htmlreplace(commonReplacement))
    .pipe(rename({ extname: '.php' }))
    .pipe(dest(`${build}`));
};

/**
 * Copy all from "src/layout" to "build/"
 */
const layout = () => src(`${source}/layout/**/*`).pipe(dest(`${build}/layout`));

/**
 * Copy all from "src/pages" to "build/"
 */
const pages = () => src(`${source}/pages/**/*`).pipe(dest(`${build}/pages`));

/**
 * Include HTML
 */
const includeHTML = () => {
  return src([`${source}/page-templates/**/*.html`])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest(`${source}`));
};

module.exports = {
  rootPagesHTML,
  rootPagesPHP,
  layout,
  pages,
  includeHTML,
};
