exports.getUser = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Get User');
  res.end();
};

exports.createUser = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Create A User');
  res.end();
};
