const tasksHttpCode= require('./tasks_http_code')

exports.getUsertask = (request, response) => {
  response.writeHead(tasksHttpCode.GET_TASK_SUCCESSFUL.status, { 'Content-Type': 'text/plain' });
  response.write(tasksHttpCode.GET_TASK_SUCCESSFUL.message);
  response.end();
};

exports.createUsertask = (request, response) => {
  response.writeHead(tasksHttpCode.TASK_CREATED_SUCCESSFUL.status, { 'Content-Type': 'text/plain' });
  response.write(tasksHttpCode.TASK_CREATED_SUCCESSFUL.message);
  response.end();
};

exports.updateUsertask = (request, response) => {
  response.writeHead(tasksHttpCode.UPDATE_TASK_SUCCESSFUL.status, { 'Content-Type': 'text/plain' });
  response.write(tasksHttpCode.UPDATE_TASK_SUCCESSFUL.message);
  response.end();
};

exports.deleteUsertask = (request, response) => {
  response.writeHead(tasksHttpCode.DELETE_TASK_SUCCESSFUL.status, { 'Content-Type': 'text/plain' });
  response.write(tasksHttpCode.DELETE_TASK_SUCCESSFUL.message);
  response.end();
};