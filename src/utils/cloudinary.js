// utils/cloudinary.js

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export async function getGaleriaImages() {
  const { resources } = await cloudinary.api.resources({
    type: 'upload',
    prefix: 'galeria/',
    max_results: 35,
  });

  return resources.map((resource) => resource.public_id);
}
