const db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.connection.query('SELECT * FROM users', (err, data) => {
      callback(err, data);
    });
  },
  create: function (user, callback) {
    db.connection.query(`INSERT INTO users (username) VALUES ('${user}')`, (err, data) => {
      callback(err, data);
    });
  }
};