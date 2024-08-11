const http = require('http');
const url = require('url');
const routes = require('./routes');
const httpStatusCode = require('./http_status_code/system');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url);
  const routeHandler = routes[parsedUrl.pathname];
  if (routeHandler) {
    if (routeHandler[request.method]) {
      routeHandler[request.method](request, response);
    } else {
      response.writeHead(httpStatusCode.METHOD_NOT_ALLOWED.status, { 'Content-Type': 'text/plain' });
      response.end(httpStatusCode.METHOD_NOT_ALLOWED.message);
    }
  } else {
    response.writeHead(httpStatusCode.NOT_FOUND.status, { 'Content-Type': 'text/plain' });
    response.end(httpStatusCode.NOT_FOUND.message);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
