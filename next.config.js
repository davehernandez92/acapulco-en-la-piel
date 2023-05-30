/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    
    domains: ['images.pexels.com', 'unsplash.it', 'res.cloudinary.com']
  },
  serverTimeout: 20000,

  
}


module.exports = nextConfig
