const mysql = require('mysql2');

const db = mysql.createPool({
  connectionLimit : 100,
  user: process.env.DATABASE_USR || 'root',
  password: process.env.DATABASE_PWD || '',
  database: process.env.DATABASE_NAME || '',
  host: process.env.DATABASE_HOST || '127.0.0.1',
  port: parseInt(process.env.DATABASE_PORT) || 3306,
});


module.exports = db;