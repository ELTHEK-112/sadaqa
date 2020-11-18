<?php
  $router = new AltoRouter;


  $router->map('GET','/about','','about_us');


  $match = $router->match();


if ($match){
    echo "about us page";
}else{
    header($_SERVER['SERVER_PROTOCOL'].'404 not found');
    echo "page not fond";
}

  