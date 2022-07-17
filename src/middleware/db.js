const mysql = require('mysql2');

const dbOptions = {
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'movies_db'
};

const connection = mysql.createConnection(dbOptions);

const db = (req, res, next) => {
  req.db = connection;
  next();
};

module.exports = db;
