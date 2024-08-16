const tasksHttpCode= require('./tasks_http_code')
const writeResponse = require('../../helpers/utils')

exports.getUsertask = (request, response) => {
  writeResponse(tasksHttpCode.GET_TASK_SUCCESSFUL.status, tasksHttpCode.GET_TASK_SUCCESSFUL.message, response, 'Task data')
  response.end();
};

exports.createUsertask = (request, response) => {
  writeResponse(tasksHttpCode.TASK_CREATED_SUCCESSFUL.status, tasksHttpCode.TASK_CREATED_SUCCESSFUL.message, response, 'Task data')
  response.end();
};

exports.updateUsertask = (request, response) => {
  writeResponse(tasksHttpCode.UPDATE_TASK_SUCCESSFUL.status, tasksHttpCode.UPDATE_TASK_SUCCESSFUL.message, response, 'Task data')
  response.end();
};

exports.deleteUsertask = (request, response) => {
  writeResponse(tasksHttpCode.DELETE_TASK_SUCCESSFUL.status, tasksHttpCode.DELETE_TASK_SUCCESSFUL.message, response, 'Task data')
  response.end();
};