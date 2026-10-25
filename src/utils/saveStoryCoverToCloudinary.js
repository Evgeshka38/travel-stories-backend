import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config';

cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const saveStoryCoverToCloudinary = async (buffer, storyId) => {
  const options = {
    folder: 'stories',
    public_id: `story_${storyId}`,
    resource_type: 'image',
    overwrite: true,
    unique_filename: false,
    transformation: [
      { width: 1200, height: 800, crop: 'fill', gravity: 'auto' },
      { fetch_format: 'auto', quality: 'auto' },
    ],
  };

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      options,
      (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      }
    );

    uploadStream.end(buffer);
  });
};
