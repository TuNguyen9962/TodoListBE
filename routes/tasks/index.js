const todoController = require('../../controllers/Todo/todoController');

module.exports = {
  GET: todoController.getUsertask,
  POST:todoController.createUsertask,
  PUT: todoController.updateUsertask,
  DELETE: todoController.deleteUsertask
};
