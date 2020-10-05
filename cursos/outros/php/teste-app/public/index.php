<?php

 require_once '../vendor/autoload.php';

 use App\Controllers\HomeController;

 $controller = new HomeController();

//  echo $controller->index();

//  echo $controller->show(1010);

echo $controller->create();
 