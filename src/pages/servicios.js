import Layout from '@/components/layout'
import Card from '@/components/card';
import Link from 'next/link';
import heroCSS from '../styles/heroServicios.module.css'
import styles from '../styles/hoteles.module.css'
import allanB from '../../public/servicios/allanb.jpg'
import downtown from '../../public/servicios/downtown2.webp'
import keraUltra from '../../public/servicios/keraultra.webp'

export default function Servicios({
  servicios
}) {

  return (
    <>

      <Layout title={"Servicios"}>
        <>
          
          <div className={heroCSS.hero}>
            <div className={styles.heading__wrapp}>
              <h1 className={styles.hoteles__heading}>Servicios</h1>
            </div>
          </div>

            <div className={styles.navegacion}>
              <Link href={"/"}>Inicio </Link>
              <p> {">"} </p>
              <Link href={"#"}>Servicios </Link>
            </div>

            <div className={styles.hoteles__subtitle}>
              <h2>Requieres de algun producto o servicio?</h2>
            </div>
            <div className={styles.card__wrapper}>
              {servicios.map((servicio) => (
                <Card
                  key={servicio.id}
                  path={"servicios"}
                  image={servicio.image}
                  title={servicio.title}
                  subtitle={servicio.subtitle}
                  text={servicio.text}
                  url={servicio.url}
                />
              ))}
            </div>
          
        </>
      </Layout>
    </>
  );
}

export async function getServerSideProps(){

  const servicios =[
    {
      id: 1,       
      image: allanB,
      title: "Allan Bañuelos ",
      subtitle: "Fotografía | Video ",
      text: "Fotografo y Acapulqueño especializado en fotografia & video de Bodas y eventos asi como  expertos en la captura de la belleza natural de Acapulco y sus alrededores. ",
      url: "allan-banuelos",
      maps: "https://goo.gl/maps/chYKVnnaTG7ZfjbT9",
      telefono:"744 484 1929",
      face:'https://www.facebook.com/profile.php?id=100081724249097',
      insta:'https://www.instagram.com/allanbanuelosphotography/',
      email:'allanbanuelosphotography@gmail.com'
    },
    {
      id: 2,       
      image: downtown,
      title: "Downtown Media ",
      subtitle: "Estudio audiovisual | Publicidad ",
      text: "Estudio audiovisual creativo, especializados en video, edición, fotografía y animación 2D",
      url: "downtownMedia",
      maps: "https://goo.gl/maps/chYKVnnaTG7ZfjbT9",
      telefono:"744 163 0982",
      face:'https://www.facebook.com/profile.php?id=100086572431112',
      insta:'https://www.instagram.com/downtown.mediamx/',
      email:'downtownmedia@gmail.com'
    },
    {
      id: 3,       
      image: keraUltra,
      title: "Keraultra Acapulco",
      subtitle: "Beauty Bar | Distribuidora ",
      text: "Beauty bar en acapulco especializados en alisados y tratamientos capilares, Somos distribuidores exlusivos de Keraultra en Acapulco",
      url: "keraultra-acapulco",
      maps: "https://goo.gl/maps/RfUJx18HUt1t7rLLA",
      telefono:"744 278 5788 ",
      face:'https://www.facebook.com/profile.php?id=100087754384581',
      insta:'https://www.instagram.com/keraultra_acapulco/',
      email:'keraultraacapulco@gmail.com'
    }
  ];
  

  return {
    props:{
      servicios
    }
  }
}