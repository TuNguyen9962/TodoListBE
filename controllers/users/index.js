const userHttpCode = require('./users_http_code')
const writeResponse = require('../../helpers/utils')


exports.getUser = (request, response) => {
  writeResponse(userHttpCode.GET_USER_SUCCESSFUL.status, userHttpCode.GET_USER_SUCCESSFUL.message)
  response.end();
};

exports.createUser = (request, response) => {
  writeResponse(userHttpCode.USER_CREATED_SUCCESSFUL.status, userHttpCode.USER_CREATED_SUCCESSFUL.message)
  response.end();
};


exports.updateUser = (request, response) => {
  writeResponse(userHttpCode.UPDATE_USER_SUCCESSFUL.status, userHttpCode.UPDATE_USER_SUCCESSFUL.message)
  response.end();
}

exports.deleteUser = (request, response) => {
  writeResponse(userHttpCode.DELETE_USER_SUCCESSFUL.status, userHttpCode.DELETE_USER_SUCCESSFUL.message)
  response.end();
}