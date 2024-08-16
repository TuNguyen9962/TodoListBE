
function writeResponse (httpCode, message , response, data) {
  response.writeHead(httpCode, { 'Content-Type': 'text/plain' });
  response.end(JSON.stringify({
    data,
    "message" : message,
    "code" : httpCode  
  }));
}

module.exports = { writeResponse }