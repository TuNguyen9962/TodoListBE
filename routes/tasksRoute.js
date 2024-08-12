const controller = require('../controllers');

module.exports = {
  GET: controller.tasks.getUsertask,
  POST:controller.tasks.createUsertask,
  PUT: controller.tasks.updateUsertask,
  DELETE: controller.tasks.deleteUsertask
};
