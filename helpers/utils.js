function writeResponse (httpCode, message) {
  response.writeHead(httpCode, { 'Content-Type': 'text/plain' });
  response.write(message);
}

export { writeResponse }