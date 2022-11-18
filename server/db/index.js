var mysql = require('mysql2');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

exports.connection = connection;