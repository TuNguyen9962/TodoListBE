const userHttpCode = require('./users_http_code')



exports.getUser = (request, response) => {
  response.writeHead(userHttpCode.GET_USER_SUCCESSFUL.status, { 'Content-Type': 'text/plain' });
  response.write(userHttpCode.GET_USER_SUCCESSFUL.message);
  response.end();
};

exports.createUser = (request, response) => {
  response.writeHead(userHttpCode.USER_CREATED_SUCCESSFUL.status, { 'Content-Type': 'text/plain' });
  response.write(userHttpCode.USER_CREATED_SUCCESSFUL.message);
  response.end();
};


exports.updateUser = (request, response) => {
  response.writeHead(userHttpCode.UPDATE_USER_SUCCESSFUL.status, { 'Content-Type': 'text/plain'});
  response.write(userHttpCode.UPDATE_USER_SUCCESSFUL.message);
  response.end();
}

exports.deleteUser = (request, response) => {
  response.writeHead(userHttpCode.DELETE_TASK_SUCCESSFUL.status, { 'Content-Type': 'text/plain'});
  response.write(userHttpCode.DELETE_TASK_SUCCESSFUL.message);
  response.end();
}