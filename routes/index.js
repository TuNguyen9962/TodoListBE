const todoRoute = require('./tasksRoute');
const userRoute = require('./usersRoute');
const loginRoute = require('./loginRoute');

module.exports = {
  '/api/tasks': todoRoute,
  '/api/users': userRoute,
  '/api/login': loginRoute,
};
