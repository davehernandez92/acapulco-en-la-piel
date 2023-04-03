import Layout from '@/components/layout'
import Card from '@/components/card';
import heroCSS from '../styles/heroRest.module.css'
import styles from '../styles/hoteles.module.css'


import rest1 from "../../public/restaurantes/rosmarLogo2.jpg"
import rest2 from "../../public/restaurantes/tarascosLogo.webp"
import rest3 from "../../public/restaurantes/restDesk2.webp"
import Link from 'next/link';

export default function Restaurantes({restaurantes}) {

  return (
    <Layout title={"Restaurantes"}>
      <>
        <div>
          <div className={heroCSS.hero}>
            <div className={styles.heading__wrapp}>
              <h1 className={styles.hoteles__heading}>Restaurantes</h1>
            </div>
          </div>

          <div className={styles.navegacion}>
            <Link href={"/"}>Inicio </Link>
            <p> {">"} </p>
            <Link href={"#"}>Restaurantes </Link>
          </div>

          <div className={styles.hoteles__subtitle}>
            <h2>¿Hambre? Checa estos restaurantes primo!</h2>
          </div>
          <div className={styles.card__wrapper}>
            {restaurantes.map((restaurante) => (
              <Card
                key={restaurante.id}
                path={'restaurantes'}
                image={restaurante.image}
                title={restaurante.title}
                subtitle={restaurante.subtitle}
                text={restaurante.text}
                url={restaurante.url}
              />
            ))}
           
          </div>
        </div>
      </>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  
  const restaurantes = [
    { 
      id: 1,       
      image: rest1,
      title: "Rosmar Restaurante",
      subtitle: "Cocina tradicional evolutiva | Restaurante",
      text: " Cocina Tradicional Evolutiva, restaurante ocupado y preocupado por el rescate del ingrediente local bajo la visión del Chef Javier Reynada",
      url: "rosmar",
      maps: "https://goo.gl/maps/c7LhgjeUjE7y71qB9",
      telefono:"744 480 1655",
      face:'https://www.facebook.com/rosmar.restaurante',
      insta:'https://www.instagram.com/rosmarrestaurante/',
      email:'rosmarrest@hotmail.com'
    },
    { 
      id: 2,     
      image: rest2,
      title: "Tacos Los Tarascos",
      subtitle: "Acapulco | Taqueria",
      text: "Cuando dicen que Los Tarascos es una Taquería con variedad, también están en lo cierto, Tacos  al pastor, tacos de pollo, tacos de bistec, tacos de chorizo, tacos de chuleta y de costilla en tortilla de maíz o harina ",
      url: "tarascos",
      maps: "https://goo.gl/maps/asepURYBc1hkihMG8",
      telefono:"7443302944",
      face:'https://www.facebook.com/lostarascosoficial',
      insta:'https://www.instagram.com/lostarascos/',
      email:'atencion.lostarascos@gmail.com'
    },
    {
      id: 3,  
      image: rest3,
      title: "Restaurante Name 3",
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
        restaurantes
      }
    }
  
}
