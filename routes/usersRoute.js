const controller = require('../controllers');
const run = require('./run');
const Middleware = require('../middlewares/check_token');

module.exports = {
  GET:    run([Middleware.checkToken],controller.users.getUser),
  POST:   run([],controller.users.createUser),
  PUT:    run([Middleware.checkToken],controller.users.updateUser),
  DELETE: run([Middleware.checkToken],controller.users.deleteUser),
};

