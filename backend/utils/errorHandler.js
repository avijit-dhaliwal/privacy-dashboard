const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
  
    if (process.env.NODE_ENV === 'production') {
      message = statusCode === 500 ? 'Internal Server Error' : message;
    }
  
    res.status(statusCode).json({
      status: 'error',
      statusCode,
      message
    });
  };
  
  module.exports = errorHandler;