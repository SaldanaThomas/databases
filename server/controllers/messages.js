var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end();
      } else {
        res.statusCode = 200;
        res.end(JSON.stringify(data));
      }
    });
  },
  post: function (req, res) {
    models.messages.create(req.body.user, req.body.msg, req.body.room, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end();
      } else {
        res.statusCode = 201;
        res.end();
      }
    });
  }
};