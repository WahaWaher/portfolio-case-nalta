<?php include ('config.php'); ?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

  <title><?=$sets['site-name'].' &#8212; '.$pages[$page]['title']?></title>
  <meta name="description" content="<?=$pages[$page]['description']?>">
  <meta name="keywords" content="<?=$pages[$page]['keywords']?>">

  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png">
  <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png">
  
  <!-- build:css -->
  <link rel="stylesheet" href="css/vendors~app.min.css">
  <link rel="stylesheet" href="css/app.css">
  <!-- endbuild -->
</head>
<body>
  <div class="app">
    <!-- AppHeader : Start -->
    <?php include('parts/header.php'); ?>
    <!-- AppHeader : End -->
  
    <!-- AppPage : Start -->
    <?php include ( 'pages/'.$page.'.php' ); ?>
    <!-- AppPage : End -->
  
    <!-- AppFooter : Start -->
    <?php include('parts/footer.php');?>
    <!-- AppFooter : End -->

    <!-- Drawers : Start -->
    <?php include('parts/drawers.php');?>
    <!-- Drawers : End -->

    <!-- Modals : Start -->
    <?php include('parts/modals.php');?>
    <!-- Modals : End -->
    
    <div id="top-button"></div>
  </div>

  <script>window.lazySizesConfig={init:!1}</script>
  <!-- build:js -->
  <script src="js/vendors~app.min.js"></script>
  <script src="js/app.js"></script>
  <!-- endbuild -->
</body>
</html>
<?php ob_end_flush(); ?>