<!-- Section : MainScreen : Start -->
<section class="sct sct-main-screen sct_under-header">
  <div class="rellax-box z-0">
    <img class="sct__bg img-cover lazyload" data-rellax-speed="-4" data-src="img/bg-corridor_1280.jpg" src="svg/lazy.svg" data-sizes="auto" data-srcset="
      img/bg-corridor.jpg 1920w,
      img/bg-corridor_1280.jpg 1280w,
      img/bg-corridor_1280.jpg 1024w,
      img/bg-corridor_768.jpg 768w
    " alt="img">
  </div>
  <div class="container">

    <div class="d-block d-sm-flex justify-content-center">
      <div class="offer-main offer-main_compact sticky-box-xs text-center">
        <div data-slider-main class="slider-main owl-carousel pos-static">
          <div>
            <div class="offer-main__title">
              <h1 class="title-1">Как с нами связаться?</h1>
            </div>
            <div class="offer-main__content mb-4">
              <p>Оставьте ваши данные и мы сами Вам перезвоним в ближайшее время для расчёта стоимости.</p>
              <button class="btn btn_fx_wave mt-3" data-src="#app-popup-order-free-measurement" data-fancybox>Заказать замер</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
<!-- Section : MainScreen : End -->

<!-- Section: ContactBlocks : Start -->
<section class="sct py-6 py-xl-7 bg-accent-light">
  <div class="container">
    <h2 class="title-2">Наши контакты</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed <br>do eiusmod tempor incididunt ut labore.</p>
  
    <div class="row mt-5 mb-n4">
      <div class="col-lg-4 mb-4">

        <div class="card-contact h-100 bg-white shadow-main">
          <h3 class="card-contact__title title-3">
            <span class="card-contact__icon card-contact__icon_outside">
              <i class="aif aif-location"></i>
            </span>
            <span class="d-inline-block">Адрес</span>
          </h3>
          <div class="card-contact__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do. 
          </div>
        </div>

      </div>
      <div class="col-lg-4 mb-4">

        <div class="card-contact h-100 bg-white shadow-main">
          <h3 class="card-contact__title title-3">
            <span class="card-contact__icon card-contact__icon_outside">
              <i class="aif aif-phone"></i>
            </span>
            <span  class="d-inline-block">Контактные телефоны</span>
          </h3>
          <div class="card-contact__content">
            <ul class="list-empty">
              <li><a class="card-contact__link" href="tel:80297442412" title="Позвонить">8 (029) 744-24-12</a></li>
              <li><a class="card-contact__link" href="tel:80297442412" title="Позвонить">8 (029) 744-24-12</a></li>
            </ul>
          </div>
        </div>

      </div>
      <div class="col-lg-4 mb-4">

        <div class="card-contact h-100 bg-white shadow-main">
          <h3 class="card-contact__title title-3">
            <span class="card-contact__icon card-contact__icon_outside">
              <i class="aif aif-mail"></i>
            </span>
            <span class="d-inline-block">E-mail</span>
          </h3>
          <div class="card-contact__content">
            <ul class="list-empty">
              <li><a class="card-contact__link" href="mailto:mail@gmail.com" title="Написать">mail@gmail.com</a></li>
              <li><a class="card-contact__link" href="mailto:sale@gmail.com" title="Написать">sale@gmail.com</a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
<!-- Section: ContactBlocks : End -->

<!-- Section: FeedbackAndMap : Start -->
<section class="sct py-6 py-xl-7">
  <div class="container">
    
  <div class="row">
    <div class="col-lg-5">
      <h2 class="title-2">Наши контакты</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
  
      <form>
        <div class="row mt-5">
          <div class="col-sm-6 mb-4">

            <div class="form-group form-group_holder_default">
              <input class="form-input form-input_wide form-input_dark" type="text">
              <label class="form-input-name">Ваше имя...</label>
            </div>

          </div>
          <div class="col-sm-6 mb-4">

            <div class="form-group form-group_holder_default">
              <input class="form-input form-input_wide form-input_dark" type="tel">
              <label class="form-input-name">Ваш телефон...</label>
            </div>

          </div>
          <div class="col-sm-12 mb-4">

            <div class="form-group form-group_holder_default">
              <textarea class="form-input form-input_wide form-input_dark" rows="8"></textarea>
              <label class="form-input-name">Ваше сообщение...</label>
            </div>

          </div>
          <div class="col-sm-12 mb-4">

            <label class="form-group">
              <input class="form-check form-check_dark" type="checkbox">
              <small class="form-check-name">Я даю <b>согласие</b> на обработку персональных данных в соответствии с <a href="/policy" target="_blank"><b>политикой конфиденциальности</b></a></small>
            </label>

          </div>
          <div class="col-12 mt-3">

            <button class="btn btn_fx_wave" type="submit" onclick="return false">Задать вопрос</button>

          </div>
        </div>
      </form>

    </div>
    <!-- GoogleMap
      get coords: https://www.gps-coordinates.net/
    -->
    <div class="col-lg-6 offset-lg-1 mt-5 mt-lg-0">
      <div class="g-map lazyload sticky-box-xs" data-gmap='{
        "center": {
           "lat": 52.519378662109375,
           "lng": 13.409503936767578
        },
        "markers": [
          {
            "position": {
              "lat": 52.519378662109375,
              "lng": 13.409503936767578
            }
          }
        ]
      }' style="height:535px"></div>
    </div>
  </div>

  </div>
</section>
<!-- Section: FeedbackAndMap : End -->

<!-- Section: FeedbackCalc : Start -->
<?php include('parts/sections/feedback-calc.php'); ?>
<!-- Section: FeedbackCalc : End -->