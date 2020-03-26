(function($, window) {
  // Defaults
  var defaults = {
    api: '',
    lang: 'ru',
    styles: [],
    markerDefaults: {},
    center: {
      lat: 51.61801655,
      lng: 54.93164063,
    },
    zoom: 16,
    disableDefaultUI: true,
    markers: []
  };

  // Constructor
  var GMap = function GMap(el, options) {
    var _ = this,
      it = (_.it = el),
      options = (_.options = options || {}),
      data = (_.data = $(el).data('gmap') || {}),
      defs = (_.defaults = defaults || {}),
      sets = (_.settings = $.extend(true, {}, defs, options, data)),
      map = (_.map = {});

    _.checkScript();
  };

  var proto = GMap.prototype;

  // Загрузка карты
  proto.loadMap = function() {
    var _ = this,
      it = _.it,
      sets = _.settings,
      map;

    // init map
    _.map = map = new google.maps.Map(it, sets);

    // init markers
    $.each(sets.markers, function(i, marker) {
      var ext = $.extend(true, {}, sets.markerDefaults, marker, {
        map: map
      });

      // ext.icon.url += '#' + marker.id;

      // ext.icon.size = new google.maps.Size(ext.icon.size[0], ext.icon.size[1]);
      // ext.icon.scaledSize = new google.maps.Size(
      //   ext.icon.scaledSize[0],
      //   ext.icon.scaledSize[1]
      // );

      var markerObject = new google.maps.Marker(ext);

      // google.maps.event.addListener(markerObject, 'mouseover', function(e) {
      //   var current = $('img[src="' + this.icon.url + '"]');
      //   var all = $('img[src^="' + this.icon.url.replace(/#\d{1,}/, '') + '"]');
      //   $(it).trigger('chooseMarker.gmap', [_, current, all, this]);
      // });
    });

    google.maps.event.addListenerOnce(map, 'idle', function() {
      $(it).trigger('mapLoaded.gmap', [_, this]);
    });
  };

  // Проверка загрузки скрипта
  proto.checkScript = function() {
    var _ = this,
      sets = _.settings;

    var script = $(
      'script[src="https://maps.googleapis.com/maps/api/js?key=' +
        sets.api +
        '&language=' +
        sets.lang +
        '"]'
    );

    if (script.length && typeof google === 'object' && 'maps' in google) {
      _.loadMap();
    } else if (script.length && typeof google !== 'object') {
      script.on('load', function() {
        _.loadMap.call(_);
      });
    } else {
      _.loadScript(sets.api, function() {
        _.loadMap.call(_);
      });
    }
  };

  // Загрузка скрипта
  proto.loadScript = function(api, callback) {
    var _ = this,
      sets = _.settings;

    var script = $('<script/>').attr(
      'src',
      'https://maps.googleapis.com/maps/api/js?key=' +
        api +
        '&language=' +
        sets.lang +
        ''
    );

    script.on('load', function() {
      if (callback && typeof callback === 'function') callback();
    });

    $('body')
      .get(0)
      .appendChild(script.get(0));
  };

  // jQuery Method
  $.fn.gMap = function(options) {
    var maps = this;

    $.each(maps, function(key, map) {
      var $map = $(map);
      map.gMap = new GMap(map, options);
    });

    return this;
  };

  GMap.defaults = defaults;
  window.GMap = GMap;
})(jQuery, window);

$(document).ready(function() {
  /**
   * GoogleMap
   * get coords: https://www.gps-coordinates.net/
   */
  $('.g-map:not(.lazyload)').gMap({
    api: 'AIzaSyBjRSvOYrqSK2hd__oTm-cjjWKIlHHXbBQ',
  });

  /**
   * Fancybox basic options
   */
  $.fancybox.defaults = $.extend(true, {}, $.fancybox.defaults, {
    idleTime: 5,
    animationEffect: 'zoom',
    animationDuration: 366,
    transitionEffect: 'circular',
    transitionDuration: 550,
    animation: {
      open: {
        name: 'magictime swap',
        duration: 500,
        start: function() {
          $(this).css('overflow', 'hidden');
        },
        complete: function() {
          $(this).css('overflow', '');
        }
      },
      close: {
        name: 'magictime rotateRight',
        duration: 750,
        start: function() {
          $(this).css('overflow', 'hidden');
        },
        complete: function() {
          $(this).css('overflow', '');
        }
      }
    },
    // spinnerTpl: '<div class="loader loader_inline loader_fancybox is-active"></div>',
    lang: 'ru',
    i18n: {
      ru: {
        CLOSE: 'Закрыть',
        NEXT: 'Далее',
        PREV: 'Назад',
        ERROR:
          'Не удалось загрузить содержимое.<br>Пожалуйста, попробуйте позже.',
        PLAY_START: 'Запустить слайд-шоу',
        PLAY_STOP: 'Остановить слайд-шоу',
        FULL_SCREEN: 'На весь экран',
        THUMBS: 'Миниатюры',
        DOWNLOAD: 'Скачать',
        SHARE: 'Поделиться',
        ZOOM: 'Масштаб'
      }
    }
  });

  /**
   * Rellax
   */
  $('.rellax-box img').each(function(key, item) {
    item.rellax = new Rellax(item);
  });

  /**
   * JCF
   */
  jcf.replace('.form-check', 'Checkbox');

  $('.form-check').each(function(key, check) {
    var $check = $(check);

    $check.parents('.jcf-checkbox').addClass($check.attr('class'));
  });

  // Animated input placeholder
  $('.form-group_holder_default input')
    .on('blur', function(e) {
      $(this)[(e.target.value ? 'add' : 'remove') + 'Class']('is-not-empty');
    })
    .trigger('blur');

  /**
   * SliderMain
   */
  var $sliderMain = $('[data-slider-main]');

  $sliderMain.each(function(i, slider) {
    var $slider = $(slider);

    // Options
    var options = $.extend(
      true,
      {},
      {
        // Default options...
        items: 1,
        autoHeight: true,
        // loop: true,
        // Navigation:
        nav: true,
        dots: true,
        navText: [
          '<i class="aif aif-arrow-check-left"></i>',
          '<i class="aif aif-arrow-check-right"></i>'
        ],
        // Lazy:
        lazyLoad: true,
        lazyLoadEager: 1, // slides amount to preload (left/right)
        // Animation:
        smartSpeed: 350,
        //  animateOut: '',
        //  animateIn: '',
        // Classes
        navContainerClass: 'slider-nav slider-nav_main slider-nav_pos_center',
        navClass: ['slider-nav__prev', 'slider-nav__next'],
        dotsClass: 'slider-dots slider-dots_main',
        dotClass: 'slider-dots__dot',
        // Custom options:
        ofi: {
          watchMQ: true
        },
        onInitialized: function() {
          $(this).fadeIn();
        }
      },
      $slider.data('owl')
    );

    var dataSync = $slider.data('sync') || '';

    if (dataSync) {
      var dataSync = $slider.data('sync') || '';
      var syncVal = dataSync.split(':') || [];
      var id = syncVal[0];
      var role = syncVal[1];
      var $syncSlider = $(
        '[data-sync="' + id + ':' + (role === 'main' ? 'prev' : 'main') + '"]'
      );
    }

    // OWL: OnInitialized
    $slider.on('initialized.owl.carousel', function(e) {
      // Refresh OFI
      if (window.objectFitImages) {
        setTimeout(function() {
          objectFitImages($(e.target).find('img'), options.ofi);
        }, 0);
      }
    });

    // OWL: OnChanged
    $slider.on('changed.owl.carousel', function(e) {
      // Refresh OFI
      if (window.objectFitImages) {
        setTimeout(function() {
          objectFitImages($(e.target).find('img'), options.ofi);
        }, 0);
      }

      // Sync
      if (dataSync && e.namespace && e.property.name === 'position') {
        var target = e.relatedTarget.relative(e.property.value, true);

        $syncSlider.owlCarousel('to', target);
      }
    });

    // Stick owl options to element
    slider.owlOptions = options;

    // Init or Lazy
    if (!$slider.hasClass('lazyload')) $slider.owlCarousel(options);
  });

  /**
   * AppDrawer
   */
  (function() {
    var $drawers = $('[data-drawer]');
    var $swithes = $('[data-drawerToggle]');

    $drawers.each(function(i, drawer) {
      var $drawer = $(drawer);
      var data = $drawer.data('drawer');
      var options = {};

      if (typeof data === 'string') {
        options.id = data;
      } else if (typeof data === 'object' && typeof data !== null) {
        options = data;
      }

      var sets = $.extend(
        true,
        {},
        {
          // Defaults...
          active: 'is-active',
          open: '',
          close: '',
          autoClose: true
        },
        options
      );

      var $switch = $('[data-drawerToggle="' + sets.id + '"');

      drawer.drawer = {
        open: function() {
          if (sets.autoClose) {
            $drawers.removeClass(sets.active);
            $swithes.removeClass(sets.active);
          }

          $switch.addClass(sets.active);
          $drawer.addClass(sets.active);
        },
        close: function() {
          $switch.removeClass(sets.active);
          $drawer.removeClass(sets.active);
        }
      };

      $('[data-drawerToggle="' + sets.id + '"').on('click', function() {
        var isOpen = $drawer.hasClass('is-active');
        if (isOpen) {
          drawer.drawer.close();
        } else {
          drawer.drawer.open();
        }
      });
    });
  })();

  /**
   * Animation on lazyloaded
   */
  $(document)
    .on('lazybeforeunveil', function(e) {
      $(e.target).css('opacity', 0);
    })
    .on('lazyloaded', function(e) {
      var $target = $(e.target);

      $target.animateCSS('fadeIn', {
        duration: 500,
        clear: true,
        start: function() {
          setTimeout(function() {
            $target.css('opacity', '');
          }, 525);
        },
        complete: function() {
          $target.css('opacity', '');
        }
      });
    });

  /**
   * LazySizes: Owl
   */
  $(document).on('lazybeforeunveil', function(e) {
    var $target = $(e.target);

    if ($target.hasClass('owl-carousel'))
      setTimeout(function() {
        $target.owlCarousel(e.target.owlOptions);
      }, 0);
  });

  /**
   * LazySizes: GoogleMaps
   */
  $(document).on('lazybeforeunveil', function(e) {
    var $target = $(e.target);

    if ($target.hasClass('g-map'))
      setTimeout(function() {
        $target.gMap({
          api: 'AIzaSyBjRSvOYrqSK2hd__oTm-cjjWKIlHHXbBQ',
        });
      }, 0);
  });

  /**
   * LazySizes: Init
   */
  lazySizes.init();

  /**
   * Scroll to block
   */
  // Scroll to selector
  function scrollToSelector(selector) {
    if (!selector) return false;

    $('html,body')
      .stop()
      .animate(
        {
          scrollTop: getOffset(selector)
        },
        {
          duration: 1100,
          easing: 'swing',
          step: function(now, fx) {
            var newDest = getOffset(selector);

            if (fx.end !== newDest) fx.end = newDest;
          },
          complete: function() {
            if (history.pushState) {
              history.pushState(null, null, selector);
            } else {
              location.hash = selector;
            }
          }
        }
      );
  }

  // Gets current offsetTop
  function getOffset(selector) {
    var offset = $(selector).offset();

    return offset ? offset.top : 0;
  }

  // Disable default anchor scroll
  if (location.hash) {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 0);
  }

  // Animate anchor scroll when page loaded
  if (location.hash) {
    setTimeout(function() {
      scrollToSelector(location.hash);
    }, 250);
  }

  $('a.scroll-to').click(function() {
    var $this = $(this);
    var href = $this.attr('href');
    var parts = href.split('#');
    var selector = parts[1] ? '#' + parts[1] : '';

    if (!selector) return false;

    // disable animate scroll for links that lead to other pages
    if (parts[0]) return;

    scrollToSelector(selector);

    return false;
  });
  /* Scroll to block: End */

  /* Back to top button: Start */
  var navButton = $('#top-button'),
    screenHeight = $(window).height(),
    topShow = screenHeight, // hidden before (screenHeight or Number), px
    navSpeed = 1000; // speed, ms

  function scrollCalc() {
    var scrollOut = $(window).scrollTop();

    if (
      scrollOut > topShow &&
      (navButton.attr('class') == '' || navButton.attr('class') == undefined)
    )
      navButton
        .fadeIn()
        .removeClass('down')
        .addClass('up')
        .attr('title', 'Наверх');
    if (scrollOut < topShow && navButton.attr('class') == 'up')
      navButton.fadeOut().removeClass('up down');
    if (scrollOut > topShow && navButton.attr('class') == 'down')
      navButton
        .fadeIn()
        .removeClass('down')
        .addClass('up');
  }

  $(window).bind('scroll', scrollCalc);
  var lastPos = 0;

  navButton.bind('click', function() {
    scrollOut = $(window).scrollTop();

    if (navButton.attr('class') == 'up') {
      lastPos = scrollOut;
      $(window).unbind('scroll', scrollCalc);

      $('body, html').animate(
        {
          scrollTop: 0
        },
        navSpeed,
        'swing',
        function() {
          navButton
            .removeClass('up')
            .addClass('down')
            .attr('title', 'Вернуться');
          $(window).bind('scroll', scrollCalc);
        }
      );
    }
    if (navButton.attr('class') == 'down') {
      $(window).unbind('scroll', scrollCalc);

      $('body, html').animate(
        {
          scrollTop: lastPos
        },
        navSpeed,
        'swing',
        function() {
          navButton
            .removeClass('down')
            .addClass('up')
            .attr('title', 'Наверх');
          $(window).bind('scroll', scrollCalc);
        }
      );
    }
  });
  /* Back to top button: End */
});
