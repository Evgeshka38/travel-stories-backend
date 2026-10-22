export const errorHandler = (err, req, res, next) => {
  let status = err.status || 500;

  if (err.name === 'ValidationError' || err.name === 'CastError') {
    status = 400;
  }

  res.status(status).json({
    status,
    message: err.message || 'Internal Server Error',
  });
};
