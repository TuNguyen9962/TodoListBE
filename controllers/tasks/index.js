
const tasksHttpCode = require('./tasks_http_code')
const helpers = require('../../helpers/utils')
const http = require('http');
const url = require('url');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/tasks',
  method: 'GET',
};

// Hàm helper để gửi yêu cầu HTTP
function makeHttpRequest(options, postData = null) {
  return new Promise((resolve, reject) => {
    // debugger
    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          if (res.statusCode < 200 || res.statusCode >= 300) {
            return reject(new Error(`HTTP Status Code: ${res.statusCode}`));
          }
          if (!data) {
            return reject(new Error('Empty response from server'));
          }
          // console.log('Raw response:', data); // Log dữ liệu gốc trước khi parse
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        } catch (err) {
          reject(new Error('Invalid JSON response: ' + err.message));
        }
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    if (postData) {
      req.write(postData);
    }

    req.end();
  });
}

exports.getUsertask = async (request, response) => {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/tasks',
    method: 'GET',
  };
  try {
    // const data = helpers.readFileDataJson(tasksDataFilePath)
    const data = await makeHttpRequest(options);
    const returnData = data.data
    helpers.writeResponse(
      data.code,
      data.message,
      response,
      returnData
    )
    response.end();

  } catch (err) {
    helpers.writeResponse(
      tasksHttpCode.SYSTEM_ERROR.status,
      tasksHttpCode.SYSTEM_ERROR.message,
      response,
      []
    )
    response.end();
  }
};

exports.createUsertask = async (request, response) => {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/tasks',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let body = '';

  request.on('data', chunk => {
    body += chunk.toString();
  });

  request.on('end', async () => {
    try {

      const postData = JSON.stringify(JSON.parse(body));
      debugger
      const data = await makeHttpRequest(options, postData);
      const returnData = data.data

      helpers.writeResponse(
        data.code,
        data.message,
        response,
        returnData
      );
    } catch (err) {
      helpers.writeResponse(
        tasksHttpCode.SYSTEM_ERROR.status,
        tasksHttpCode.SYSTEM_ERROR.message,
        response,
        []
      );
    } finally {
      response.end();
    }
  });
};

exports.updateUsertask = async (request, response) => {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/tasks',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let body = '';

  request.on('data', chunk => {
    body += chunk.toString();
  });

  request.on('end', async () => {
    try {
      const postData = JSON.stringify(JSON.parse(body));
      const data = await makeHttpRequest(options, postData);
      const returnData = data.data

      helpers.writeResponse(
        data.code,
        data.message,
        response,
        returnData
      );
    } catch (err) {
      helpers.writeResponse(
        tasksHttpCode.SYSTEM_ERROR.status,
        tasksHttpCode.SYSTEM_ERROR.message,
        response,
        []
      );
    } finally {
      response.end();
    }
  });
};

exports.deleteUsertask = async (request, response) => {
  debugger
  const parsedUrl = url.parse(request.url, true);
  const taskId = parsedUrl.query.taskId;

  if (!taskId) {
    helpers.writeResponse(
      tasksHttpCode.SYSTEM_ERROR.status,
      'Task ID is required.',
      response,
      []
    );
    return response.end();
  }

  const options = {
    hostname: 'localhost',
    port: 3000,
    path: `/api/tasks?taskId=${taskId}`, // Chèn taskId vào query string
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const data = await makeHttpRequest(options);
    const returnData = data.data;

    helpers.writeResponse(
      data.code,
      data.message,
      response,
      returnData
    );
  } catch (err) {
    helpers.writeResponse(
      tasksHttpCode.SYSTEM_ERROR.status,
      tasksHttpCode.SYSTEM_ERROR.message,
      response,
      []
    );
  } finally {
    response.end();
  }
};
