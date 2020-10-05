<?php

require_once '../vendor/autoload.php';

use App\Controllers\HomeController;
use ETI\DB\Database;

use const ETI\DB\DB_HOST;

$home = new HomeController;

echo $home->index();

$database = new Database();
// var_dump($database->getConn());

echo $database->getDbHost();