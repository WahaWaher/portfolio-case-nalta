/**
 * App vendors
 * <vendor-name>: <vendor-path>
 */
module.exports = {
  'jquery': './node_modules/jquery/dist/jquery.js',
  'jquery.animate.css': './node_modules/@wahawaher/jquery-animate-css/jquery.animate.css.js',
  'lazysizes.build': [
    './node_modules/lazysizes/plugins/unveilhooks/ls.unveilhooks.js',
    './node_modules/lazysizes/plugins/object-fit/ls.object-fit.js',
    './node_modules/lazysizes/plugins/respimg/ls.respimg.js',
    './node_modules/lazysizes/lazysizes.js',
  ],
  'fancybox.build': [
    './node_modules/@fancyapps/fancybox/src/js/core.js',
    './node_modules/@fancyapps/fancybox/src/js/guestures.js',
  ],
  // 'owl.carousel': './node_modules/owl.carousel/dist/owl.carousel.min.js'
  'owl.carousel.build': [
    './node_modules/owl.carousel/src/js/owl.carousel.js',
    './node_modules/owl.carousel/src/js/owl.navigation.js',
    './node_modules/owl.carousel/src/js/owl.animate.js',
    './node_modules/owl.carousel/src/js/owl.autoheight.js',
    // './node_modules/owl.carousel/src/js/owl.lazyload.js'
  ]
};

