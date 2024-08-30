const controller = require('../controllers');
const Middleware = require('../middlewares/check_token');
const run = require('./run');

module.exports = {
  GET:    run([], controller.tasks.getUsertask),
  POST:   run([], controller.tasks.createUsertask),
  PUT:    run([], controller.tasks.updateUsertask),
  DELETE: run([], controller.tasks.deleteUsertask),
};

