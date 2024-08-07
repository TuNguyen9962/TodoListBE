const todoRoute = require('./tasks');
const userRoute = require('./users');

module.exports = {
  'api/tasks': todoRoute,
  'api/users': userRoute,
};
