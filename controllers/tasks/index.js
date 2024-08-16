const tasksHttpCode = require('./tasks_http_code')
const output = require('../../helpers/utils')
var taskData = [
  { taskId: '1', userId: 1, name: 'Todo 1', isDone: true },
  { taskId: '2', userId: 2, name: 'Todo 2', isDone: false },
  { taskId: '3', userId: 1, name: 'Làm bài tập về nhà nhứ 3 trong tuần', isDone: false },]

exports.getUsertask = (request, response) => {
  output.writeResponse(tasksHttpCode.GET_TASK_SUCCESSFUL.status, tasksHttpCode.GET_TASK_SUCCESSFUL.message, response, taskData)
  response.end();
};

exports.createUsertask = (request, response) => {
  var body = '';
  var task = {};
  request.on('data', chunk => {
    body += chunk.toString();
  });
  request.on('end', () => {
    const parsedBody = JSON.parse(body);
    let name = parsedBody.name;
    let isDone =  parsedBody.isDone;
    task = {
      taskId: "1",
      userId: "1",
      name: name,
      isDone: isDone
    }
    if (name && isDone) {
      taskData.push(task);
    }
  });
  output.writeResponse(tasksHttpCode.TASK_CREATED_SUCCESSFUL.status, tasksHttpCode.TASK_CREATED_SUCCESSFUL.message, response, taskData)
  response.end();
};

exports.updateUsertask = (request, response) => {
  output.writeResponse(tasksHttpCode.UPDATE_TASK_SUCCESSFUL.status, tasksHttpCode.UPDATE_TASK_SUCCESSFUL.message, response, 'Task data')
  response.end();
};

exports.deleteUsertask = (request, response) => {
  output.writeResponse(tasksHttpCode.DELETE_TASK_SUCCESSFUL.status, tasksHttpCode.DELETE_TASK_SUCCESSFUL.message, response, 'Task data')
  response.end();
};