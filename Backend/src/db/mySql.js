const mysql = require('mysql2/promise');
const bluebird = require('bluebird');

const pool=mysql.createPool({
    host:process.env.MYSQL_URL,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE,
    connectionLimit:10,
    port: process.env.RDS_PORT, 
    Promise: bluebird,
})


//const promisePool = pool.promise();

module.exports = pool