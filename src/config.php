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