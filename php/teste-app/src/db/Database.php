<?php
namespace Formularios\DB;

use Formularios\Config\Env;

class Database
{
    public function getConnection()
    {
        return "Conexão com banco de dados - " .
        "DB_HOST = " . Env::DB_HOST .
        "- DB_NAME = " . Env::DB_NAME 
        ;
    }
}