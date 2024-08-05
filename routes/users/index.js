const userController = require('../../controllers/User/userController');

module.exports = {
  GET: userController.getUser,
  POST: userController.createUser,
};
