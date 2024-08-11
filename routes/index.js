const todoRoute = require('./Tasks');
const userRoute = require('./Users');

module.exports = {
  '/api/tasks': todoRoute,
  '/api/users': userRoute,
};
