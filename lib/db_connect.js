const mysql = require ("mysql");
require ("dotenv").config();

let con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
//user can do multiple routes without reinitializing connection
    multipleStatements:true
})

module.export = con