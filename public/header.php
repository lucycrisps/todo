<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html class="no-js lt-ie10 gt-ie8"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js gt-ie9 gt-ie8"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
        <!--[if lte IE 8]>
          <link rel="stylesheet" href="assets/styles/css/old-ie.css">
        <![endif]-->
        <!--[if gt IE 8]><!-->
        <link rel="stylesheet" href="/assets/styles/css/main.css">
        <!--<![endif]-->

        <script src="/assets/js/vendor/modernizr-2.6.2.min.js"></script>

        <!--[if lt IE 9]>
          <script>
             document.createElement('header');
             document.createElement('nav');
             document.createElement('section');
             document.createElement('article');
             document.createElement('aside');
             document.createElement('footer');
          </script>
       <![endif]-->

       <!-- FAVICONS -->
      
        <!-- Basic Icon with mutiple resolutions -->
        <link rel="icon" href="/assets/img/favicon/favicon.ico?v=2">

        <!-- iOS 7/8 Icons -->
        <link href="/assets/img/favicon/favicon-152x152.png" rel="apple-touch-icon" />

        <link href="/assets/img/favicon/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
        <link href="/assets/img/favicon/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
        <link href="/assets/img/favicon/favicon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
        <link href="/assets/img/favicon/apple-touch-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />

        <!-- Android, Chrome  & Windows -->
        <link href="/assets/img/favicon/favicon.png" rel="icon" />
        <link href="/assets/img/favicon/favicon-72x72.png" rel="icon" sizes="72x72" />
        <link href="/assets/img/favicon/favicon-144x144.png" rel="icon" sizes="144x144" />
        <link href="/assets/img/favicon/favicon-152x152.png" rel="icon" sizes="152x152" />
        <link href="/assets/img/favicon/favicon-192x192.png" rel="icon" sizes="192x192" />

        <!-- Windows 8 / IE10 /  Metro -->
        <meta name="msapplication-TileColor" content="#FFFFFF">
        <meta name="msapplication-TileImage" content="/assets/img/favicon/favicon-144.png">

        <link href="https://fonts.googleapis.com/css?family=Dosis:400,600" rel="stylesheet">

    </head>

    <body>

        <div class="total-wrapper">

            <?php //include ('partials/off-canvas-nav.php'); ?>

            <div class="main-wrapper">

                <header class="global-header">
                    
                    <!-- Off Canvas Trigger -->
                    <div class="trigger-off-canvas-container med-down">
                        <a href="#offCanvasNav" class="trigger-off-canvas" data-trigger="off-canvas-nav">
                            <span class="trigger-off-canvas__text">Menu</span>
                        </a>
                        <!-- Close button for when no JS -->
                        <a href="#" class="trigger-off-canvas js-replaced" data-trigger="off-canvas-nav">
                            <span class="trigger-off-canvas__text">Close</span>
                        </a>
                    </div>
                    <!-- // -->

                    <div class="col-1-1">
                        <h1>To do list</h1>

                        <div class="header__utils">
                            <ul>
                                <li><a href="#" title="" id="addList" class="button">New list</a></li>
                            </ul>
                        </div>
                    </div>

                </header>