const userController = require('./users')
const taskController = require('./tasks')
const dbController = require('./database')

exports.users = userController
exports.tasks = taskController
exports.database = dbController