<?php
namespace ETI\DB;

class Database
{
    public function getConn()
    {
        return true;
    }

    public function getDbHost()
    {
        return Env::DB_HOST;
    }
}