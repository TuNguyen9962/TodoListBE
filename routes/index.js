const todoRoute = require('./tasks');
const userRoute = require('./users');

module.exports = {
  '/tasks': todoRoute,
  '/users': userRoute,
};
