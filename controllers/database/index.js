const http = require('http')
const db_config = require('../../helpers/db_env')
const db_http_code = require('./db_http_code')
const helpers = require('../../helpers/utils')


exports.getDb = async (request, response) => {
  try {
    const options = {
      hostname: 'localhost', // The server you are calling
      port: 3000, // The port you are connecting
      path: '/api/tasks', // API endpoint
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const dbRequest = http.request(options, (res) => {
      let data = '';
    
      // Listen for data coming from the server
      res.on('data', (chunk) => {
        data += chunk;
      });
    
      // The response has been completely received
      res.on('end', () => {
        // Set the response headers for Postman
        response.setHeader('Content-Type', 'application/json');
        response.setHeader('Access-Control-Allow-Origin', '*'); // Allow access from any origin

        // Write the response body to the response stream
        response.write(data);

        // End the response
        response.end();
      });
    });
    
    // Handle errors during the request
    dbRequest.on('error', (error) => {
      console.error('Request error:', error);
      helpers.writeResponse(db_http_code.DB_SERVER_ERROR.status, db_http_code.DB_SERVER_ERROR.message, response, [])
      response.end();
    });

    dbRequest.end()

    } catch (error) {
      console.error('Error:', error);
      helpers.writeResponse(db_http_code.DB_SERVER_ERROR.status, db_http_code.DB_SERVER_ERROR.message, response, [])
      response.end();
    }
}
