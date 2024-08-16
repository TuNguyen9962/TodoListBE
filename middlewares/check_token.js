function getUserToken() {
  return {token : '123456789'}
}

const checkToken = (req, res, next) => {
  const token = req.headers['authorization'];
  // console.log(token)
  if (!token) {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      code: 'UNAUTHORIZED',
      message: 'Token is missing or invalid',
    }));
    return;
  }

  if (token !== '123456789') {
    res.writeHead(403, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      code: 'FORBIDDEN',
      message: 'Token is invalid',
    }));
    return;
  }

  next();  // Token hợp lệ, tiếp tục
};

module.exports = { getUserToken, checkToken }