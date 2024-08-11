const todoController = require('../../controllers/todo/todoController');

module.exports = {
  GET: todoController.getUsertask,
  POST:todoController.createUsertask,
  PUT: todoController.updateUsertask,
  DELETE: todoController.deleteUsertask
};
