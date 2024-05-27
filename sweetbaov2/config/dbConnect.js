require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectTimeout: process.env.DB_TIMEOUT
});
/**** 
const dbconfig = {
    db: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectTimeout: process.env.DB_TIMEOUT
    },
    listPerPage: 10
};
*** testing
let sql = "SELECT * FROM config;";

pool.execute(sql, function(err, result){
    if (err) throw err;
    //console.log(result);
    result.forEach(element => {
        console.log(element.configuration_title);
    });
});
****/
module.exports = pool.promise();

//module.exports = dbconfig;