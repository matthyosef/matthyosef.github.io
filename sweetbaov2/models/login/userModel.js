require('dotenv').config();
//const mysql = require('mysql2');
/*
var dbscema = require('mysql-schema').getSchema({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    configurations: process.env.DB_CONFIGURATIONS,
    extensions: process.env.DB_EXTENSIONS,
    asJson: false,
    output: process.env.DB_SCHEMA
});
*/
//const dbSchema = require('mysql-schema');

var bb = require('mysqlx');
bb.getSession({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
}).then(function (session){
    var schema = session.getSchema('sweetbaov2');
    console.log(schema);
});