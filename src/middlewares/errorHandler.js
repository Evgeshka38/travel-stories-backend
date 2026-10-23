import multer from "multer";

export const errorHandler = (err, req, res, next) => {
  let status = err.status || 500;

  if (err.name === "ValidationError" || err.name === "CastError") {
    status = 400;
  }
  if (err instanceof multer.MulterError) {
    status = err.code === "LIMIT_FILE_SIZE" ? 400 : status;
  }

  res.status(status).json({
    status,
    message: err.message || "Internal Server Error",
  });
};
