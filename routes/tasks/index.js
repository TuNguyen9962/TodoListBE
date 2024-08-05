const todoController = require('../../controllers/todocontroller/todoController');

module.exports = {
  GET: todoController.getUsertask,
};