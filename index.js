const http = require('http');
const url = require('url');
const routes = require('./routes');
const httpStatusCode = require('./http_status_code/system');
const writeResponse = require('./helpers/utils')

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((request, response) => {

  const parsedUrl = url.parse(request.url, true);
  const routeHandler = routes[parsedUrl.pathname];

  if (routeHandler) {
    const methodHandler = routeHandler[request.method];
    if (methodHandler) {
      methodHandler(request, response);
    } else {
      writeResponse.writeResponse(httpStatusCode.METHOD_NOT_ALLOWED.status, httpStatusCode.METHOD_NOT_ALLOWED.message,response,[]);
    }
  } else {
    writeResponse.writeResponse(httpStatusCode.NOT_FOUND.status, httpStatusCode.NOT_FOUND.message);
  }
});

  

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
