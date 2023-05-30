import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
      <Head>
        <meta name="description" content="Si estás buscando las mejores opciones de turismo en Acapulco, México, nuestra página web es la guía perfecta para ti. Descubre una amplia variedad de restaurantes y hoteles de alta calidad para que disfrutes de una experiencia única y memorable. Además, encontrarás toda la información que necesitas para explorar los sitios turísticos más destacados de Acapulco. ¡Haz tu reserva ahora y vive una aventura inolvidable en uno de los destinos más populares de México!" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link  href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Syne:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
