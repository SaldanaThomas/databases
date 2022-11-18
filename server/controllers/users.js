var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, data) => {
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
    models.users.create(req.body.user, (err, data) => {
      if (err) {
        res.statusCode = 404;
      } else {
        res.statusCode = 201;
        res.end();
      }
    });
  }
};