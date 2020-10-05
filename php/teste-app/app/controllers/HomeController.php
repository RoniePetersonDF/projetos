<?php
namespace App\Controllers;

use Formularios\DB\Database;

class HomeController
{
    public function index()
    {
        return "Home Controller - Index";
    }

    public function show($id)
    {
        return "Home Controller - Show - {$id}" ;
    }

    public function create()
    {
        $db = new Database();
        return "Home Controller - create - metodo database - " . $db->getConnection() ;
    }
}