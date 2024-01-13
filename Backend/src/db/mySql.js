const mysql = require('mysql2/promise');
const bluebird = require('bluebird');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'nirmalya',
    database:'stock-market',
    connectionLimit:10,
    Promise: bluebird
})

//const promisePool = pool.promise();

module.exports = pool