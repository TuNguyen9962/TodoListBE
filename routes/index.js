const todoRoute = require('./tasksRoute');
const userRoute = require('./usersRoute');
const loginRoute = require('./loginRoute');
const databaseRoute = require('./databaseRoute');

module.exports = {
  '/api/tasks': todoRoute,
  '/api/users': userRoute,
  '/api/login': loginRoute,
  '/api/database': databaseRoute
};
