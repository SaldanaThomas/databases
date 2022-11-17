var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.connection.query('SELECT * FROM messages', (err, data) => {
      callback(err, data);
    });
  },
  create: function (user, msg, room, callback) {
    db.connection.query(`INSERT INTO messages (user, msg, room) VALUES ('${user}', '${msg}', '${room}')`, (err, data) => {
      callback(err, data);
    });
  }
};