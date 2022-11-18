var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.connection.query('SELECT * FROM messages', (err, data) => {
      callback(err, data);
    });
  },
  create: function (user, msg, room, callback) {
    console.log(`USER = ${user}, MSG = ${msg}, ROOM = ${room}`);
    db.connection.query(`INSERT INTO messages (user, msg, room) VALUES ('${user}', "${msg}", '${room}')`, (err, data) => {
      callback(err, data);
    });
  }
};