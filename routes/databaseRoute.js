const controller = require('../controllers');
const Middleware = require('../middlewares/check_token');
const run = require('./run');

module.exports = {
  GET:    run([], controller.database.getDb),
  // POST:   run([Middleware.checkToken], controller.database.createUsertask),
  // PUT:    run([Middleware.checkToken], controller.database.updateUsertask),
  // DELETE: run([Middleware.checkToken], controller.database.deleteUsertask),
};


