exports.getUsertask = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('getUserTodo');
  res.end();
};

exports.createUsertask = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('createUserTodo');
  res.end();
};

exports.updateUsertask = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('updateUsertask');
  res.end();
};

exports.deleteUsertask = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('deleteUsertask');
  res.end();
};