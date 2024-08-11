const HTTP_STATUS_CODE = {
  TASK_CREATED_SUCCESSFUL: {
    message: 'Create task successful',
    status: 201,
  },

  GET_TASK_SUCCESSFUL: {
    message: 'Get task successful',
    status: 200,
  },

  UPDATE_TASK_SUCCESSFUL: {
    message: 'Update task successful',
    status: 204,
  },

  DELETE_TASK_SUCCESSFUL: {
    message: 'Delete task successful',
    status: 204,
  },
};

module.exports = HTTP_STATUS_CODE;
