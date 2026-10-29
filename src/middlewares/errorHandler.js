import multer from 'multer';

export const errorHandler = (err, req, res, next) => {
  console.log('ERROR:', err.message);
  console.log('STATUS BEFORE:', err.status, err.http_code);
  let status = err.status || err.http_code || 500;

  if (err.name === 'ValidationError' || err.name === 'CastError') {
    status = 400;
  }
  if (err instanceof multer.MulterError) {
    status = err.code === 'LIMIT_FILE_SIZE' ? 400 : status;
  }
  if (
    typeof err.message === 'string' &&
    err.message.includes('Maximum total number of pixels')
  ) {
    console.log('PIXEL LIMIT ERROR DETECTED');
    status = 400;
  }
  res.status(status).json({
    status,
    message: err.message || 'Internal Server Error',
  });
};
