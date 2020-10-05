const mysql = require('mysql');

const connMySQL = function() {
    console.log('criando uma conexão com o bd')
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'node_db'
    });
}
module.exports = function(){
    return connMySQL
}