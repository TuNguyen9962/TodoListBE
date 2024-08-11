const userController = require('../../controllers/user/userController');

module.exports = {
  GET: userController.getUser,
  POST: userController.createUser,
  PUT: userController.updateUser,
  DELETE: userController.deleteUser,
};
