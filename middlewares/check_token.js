// auth.js

const jwt = require('jsonwebtoken');

// Secret key for signing JWTs
const SECRET_KEY = 'your_secret_key'; // Replace with an environment variable in production

// Function to generate a JWT for a user
function getUserToken(username) {
  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
  return { token };  // Return the token to the caller 
}

// Middleware to check if token is valid
const checkToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      code: 'UNAUTHORIZED',
      message: 'Token is missing or invalid',
    }));
    return;
  }

  // Verify the token
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      res.writeHead(403, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          code: 'FORBIDDEN',
          message: 'Token is invalid',
        })
      );
      return;
    }
    req.user = user;  // Store the decoded user info in req.user for further use
    next();  // Continue to the next middleware or route handler
  });
};

module.exports = { SECRET_KEY, getUserToken, checkToken };
