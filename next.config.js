/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com', 'unsplash.it', 'res.cloudinary.com']
  },
  async exportPathMap() {
    const responseRest = await fetch(`${process.env.API_URL}/restaurantes?populate=imagenes`);
    const { data: restaurantes } = await responseRest.json();

    const responseHotels = await fetch(`${process.env.API_URL}/hoteles?populate=imagenes`);
    const { data: hoteles } = await responseHotels.json();

    // Generate paths for restaurantes
    const pathsRestaurantes = restaurantes.map((restaurante) => ({
      params: { url: restaurante.attributes.url },
    }));

    // Generate paths for hoteles
    const pathsHoteles = hoteles.map((hotel) => ({
      params: { id: hotel.id },
    }));

    // Combine the paths for restaurantes and hoteles
    const paths = [...pathsRestaurantes, ...pathsHoteles];

    // Generate the path map
    const pathMap = {};
    paths.forEach((path) => {
      pathMap[`/restaurantes/${path.params.url}`] = {
        page: '/restaurantes/[url]',
        query: path.params,
      };

      pathMap[`/hoteles/${path.params.id}`] = {
        page: '/hoteles/[id]',
        query: path.params,
      };
    });

    return pathMap;
  }
};

module.exports = nextConfig;

