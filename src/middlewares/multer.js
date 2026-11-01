import createHttpError from "http-errors";
import multer from "multer";

export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 500 * 1024,
    files: 1,
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(createHttpError(400, "Unsupported image format"));
    }
  },
});
