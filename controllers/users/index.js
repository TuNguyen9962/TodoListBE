const userHttpCode = require('./users_http_code')
const helpers = require('../../helpers/utils')
const http = require('http');
const url = require('url');
const jwt = require('jsonwebtoken');
const { checkToken, getUserToken } = require('../../middlewares/check_token');

// Hàm helper để gửi yêu cầu HTTP
function makeHttpRequest(options, postData = null) {
  return new Promise((resolve, reject) => {
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

// GET User
exports.getUser = async (request, response) => {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/users',
    method: 'GET',
  };
  try {
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
      userHttpCode.SYSTEM_ERROR.status,
      userHttpCode.SYSTEM_ERROR.message,
      response,
      []
    )
    response.end();
  }
};

// POST Create User
exports.createUser = async (request, response) => {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/users',
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

//  UPDATE User
exports.updateUser = async (request, response) => {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/users',
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

// DELETE User
exports.deleteUser = async (request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const userId = parsedUrl.query.userId;

  if (!userId) {
    helpers.writeResponse(
      userHttpCode.SYSTEM_ERROR.status,
      'User ID is required.',
      response,
      []
    );
    return response.end();
  }

  const options = {
    hostname: 'localhost',
    port: 3000,
    path: `/api/users?userId=${userId}`,
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


// To generate token during login
exports.login = (req, res) => {
  const { username, password } = JSON.parse(req.body);

  if (username === 'user' && password === 'password') {
    const token = getUserToken(username);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      code: 'SUCCESS',
      message: 'User authenticated successfully',
      token: token.token,
    }));
  } else {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      code: 'UNAUTHORIZED',
      message: 'Invalid username or password',
    }));
  }
};

// To protect routes
exports.getUser = (req, res) => {
  checkToken(req, res, () => {
    // Your route logic after token is validated
  });
};

