import Layout from '@/components/layout'
import Card from '@/components/card';
import Link from 'next/link';
import heroCSS from '../styles/hero.module.css'
import styles from '../styles/hoteles.module.css'

import hotel1 from "../../public/DESKTOP/costaAzul.avif"
import hotel2 from "../../public/DESKTOP/WEB3.jpg"
import hotel3 from "../../public/DESKTOP/WEB4.jpg"

export default function Hoteles({hotels}) {
 
  return (
    <Layout title={"Hoteles"}>
      <>
        <div>
          <div className={heroCSS.hero}>
            <div className={styles.heading__wrapp}>
              <h1 className={styles.hoteles__heading}>Hoteles</h1>
            </div>
          </div>

          <div className={styles.navegacion}>
            <Link href={"/"}>Inicio </Link>
            <p> {">"} </p>
            <Link href={"#"}>Hoteles </Link>
          </div>

          <div className={styles.hoteles__subtitle}>
            <h2>Checa nuestra lista de Hoteles!</h2>
          </div>
          <div className={styles.card__wrapper}>
            {hotels.map((hotel) => (
              <Card
                key={hotel.id}
                path={'hoteles'}
                image={hotel.image}
                title={hotel.title}
                subtitle={hotel.subtitle}
                text={hotel.text}
                url={hotel.url}
              />
            ))}
           
          </div>
        </div>
      </>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  
  const hotels = [
    { 
      id: 1,       
      image: hotel1,
      title: "Hotel Costa Azul",
      subtitle: "Acapulco Dorado | Otra cosa",
      text: " En el corazón de Acapulco Dorado, ya unos pasos de la playa de arenas doradas acariciadas por el sol y de la atractiva Costera Miguel Alemán, te espera el Hotel Costa Azul, un lugar con un concepto innovador diseñado pensando en ti. El hotel ofrece un estilo único que fusiona un ambiente y decoración modernos con un toque clásico que promete una experiencia inolvidable.",
      url: "hotel-costa-azul",
      maps: "https://goo.gl/maps/MRVYwQPHDYtHxXjK7",
      telefono:"744 484 1929",
      face:'https://www.facebook.com/hotelcostaazulacapulco?fref=ts',
      insta:'https://www.instagram.com/hotelcostaazulacapulco/?utm_medium=copy_link',
      email:'info@hotelcostaazul.mx'
    },
    { 
      id: 2,     
      image: hotel2,
      title: "Hotel Name 2",
      subtitle: "Acapulco Dorado | Otra cosa",
      text: " En el corazón de Acapulco Dorado, ya unos pasos de la playa de arenas doradas acariciadas por el sol y de la atractiva Costera Miguel Alemán, te espera el Hotel Costa Azul, un lugar con un concepto innovador diseñado pensando en ti. El hotel ofrece un estilo único que fusiona un ambiente y decoración modernos con un toque clásico que promete una experiencia inolvidable.",
      url: "hotel-costa-azul",
      maps: "https://goo.gl/maps/MRVYwQPHDYtHxXjK7",
      telefono:"744 484 1929",
      face:'https://www.facebook.com/hotelcostaazulacapulco?fref=ts',
      insta:'https://www.instagram.com/hotelcostaazulacapulco/?utm_medium=copy_link',
      email:'info@hotelcostaazul.mx'
    },
    {
      id: 3,  
      image: hotel3,
      title: "Hotel Name 3",
      subtitle: "Acapulco Dorado | Otra cosa",
      text: " En el corazón de Acapulco Dorado, ya unos pasos de la playa de arenas doradas acariciadas por el sol y de la atractiva Costera Miguel Alemán, te espera el Hotel Costa Azul, un lugar con un concepto innovador diseñado pensando en ti. El hotel ofrece un estilo único que fusiona un ambiente y decoración modernos con un toque clásico que promete una experiencia inolvidable.",
      url: "hotel-costa-azul",
      maps: "https://goo.gl/maps/MRVYwQPHDYtHxXjK7",
      telefono:"744 484 1929",
      face:'https://www.facebook.com/hotelcostaazulacapulco?fref=ts',
      insta:'https://www.instagram.com/hotelcostaazulacapulco/?utm_medium=copy_link',
      email:'info@hotelcostaazul.mx'
    },
  ];
 

  return {
      props: {
        hotels
      }
    }
  
}
