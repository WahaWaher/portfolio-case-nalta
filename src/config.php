<?php # config.php

// Settings
$sets = array(
  'site-name' => 'Nalta',
  'description' => 'description',
  'keywords' => 'nalta, doors, windows'
);

// Pages
$pages = array(
  'home' => array(
    'title' => 'Главная',
    'description' => $sets['description'],
    'keywords' => $sets['keywords']
  ),
  'category' => array(
    'title' => 'Категория товара',
    'description' => $sets['description'],
    'keywords' => $sets['keywords']
  ),
  'product' => array(
    'title' => 'Карточка продукта',
    'description' => $sets['description'],
    'keywords' => $sets['keywords']
  ),
  'about' => array(
    'title' => 'О компании',
    'description' => $sets['description'],
    'keywords' => $sets['keywords']
  ),
  'setup' => array(
    'title' => 'Установка',
    'description' => $sets['description'],
    'keywords' => $sets['keywords']
  ),
  'contacts' => array(
    'title' => 'Контакты',
    'description' => $sets['description'],
    'keywords' => $sets['keywords']
  ),
  'policy' => array(
    'title' => 'Политика конфиденциальности',
    'description' => $sets['description'],
    'keywords' => $sets['keywords']
  ),
  'thanks' => array(
    'title' => 'Страница благодарности',
    'description' => $sets['description'],
    'keywords' => $sets['keywords']
  ),
  '404' => array(
    'title' => 'Страница не найдена',
    'description' => $sets['description'],
    'keywords' => $sets['keywords'],
  ),
);

if( isset($_GET['route']) ) {
  $get = str_replace( '/', '', $_GET['route'] );
  if( array_key_exists( $get, $pages ) ) $page = $get;
  else {
    header('HTTP/1.0 404 Not Found');
    $page = '404';
  }
} else $page = 'home';