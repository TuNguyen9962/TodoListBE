const http = require('http')
const db_config = require('../../helpers/db_env')
const db_http_code = require('./db_http_code')

exports.getDb = (url) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: db_config.url, // The server you are calling
      port: db_config.port, // The port you are connecting
      path: '/tasks', // API endpoint
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const request = http.request(options, (response) => {
      let data = '';

      // Listen for data coming from the server
      res.on('data', (chunk) => {
        data += chunk;
      });
    
      // The response has been completely received
      res.on('end', () => {
        console.log('Response status code:', res.statusCode);
        console.log('Response headers:', res.headers);
        console.log('Response body:', data);
      });
    });

    request.on('error', (error) => {
      reject(error);
    });

    request.end();
  });
};

//exports.writeDB = {}
