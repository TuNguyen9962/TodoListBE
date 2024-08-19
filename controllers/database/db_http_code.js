const HTTP_STATUS_CODE = {
  CALL_DB_SUCCESSFUL: {
    message: 'Call DB Server Successfully',
    status: 201,
  },

  CALL_DB_FAILED: {
    message: 'Call DB Server Failed',
    status: 200,
  },

  DB_SERVER_ERROR: {
    message: 'DB Server Error',
    status: 500
  },

  DB_SERVER_NOT_FOUND: {
    message: 'DB Server Not Found',
    status: 404
  }
};

module.exports = HTTP_STATUS_CODE;
