import Layout from '@/components/layout'
import GaleriaComponent from '@/components/galeria.jsx'
import { useRouter } from "next/router"
import EmailButton from '@/components/emailButton'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import styles from '../../styles/hotel.module.css'
import allanB from '../../../public/servicios/allanb.jpg'
import downtown from '../../../public/servicios/downtown2.webp'
import keraUltra from '../../../public/servicios/keraultra.webp'
import mapsIcon from '../../../public/google-maps.png'
import facebook from '../../../public/facebook.png'
import instagram from '../../../public/instagram1.png'
import telefono from '../../../public/telephone.png'
import website  from '../../../public/internet.png'





export default function Restaurante({servicio, photos}) {

    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>
      }
    
    

   
  return (
    <Layout>
      <>
        <div>
          <div className={styles.navegacion}>
            <Link className={styles.link} href={"/"}>Inicio </Link>
            <p> {">"} </p>
            <Link className={styles.link} href={"/servicios"}>Servicios </Link>
            <p> {">"} </p>
            <Link className={styles.link} href={'#'}>{servicio.title}</Link>
          </div>

          <h1 className={styles.title}>{servicio.title}</h1>
          <h2 className={styles.subtitle}>{servicio.subtitle}</h2>

          <div className={styles.slide}>
            <Image
              src={servicio.image}
              alt={`Imagen de ${servicio.title}`}
              className={styles.image__slide}
            />
          </div>

        </div>

        <div className={styles.descripcion}>
          <h3> Descripcion </h3>
          <p>{servicio.text}</p>
        </div>
        <div className={styles.datos}>
          <div className={styles.datos__direccion}>
            <h4>Direccion:</h4>
            <Link className={styles.link} href={servicio.maps} target="_blank">
              <p>{servicio.direccion}</p>
              <Image className={styles.mapsIcon} src={mapsIcon} alt={'Google maps Icono'}/>
            </Link>
          </div>
          <div className={styles.datos__contacto}>
            <h4>Contacto: </h4>
            <Link className={styles.contacto__telLink} href={`tel:${servicio.telefono}`}>Telefono: {servicio.telefono}
            <Image className={styles.contacto__telIcono} src={telefono} alt={'Telefono Icono'}/>
            </Link>
            <p>Conecta con {servicio.title}: </p>
            
            <div className={styles.datos__iconos}> 
              <Link href={servicio.face} target="_blank">
                <Image className={styles.social} src={facebook} alt={'Facebook Icono'} />

              </Link>
              <Link href={servicio.insta} target="_blank">
                <Image className={styles.social} src={instagram} alt={'Instagram Icono'}/>

              </Link>
              <Link className={styles.website__icon} href={servicio.website} target="_blank"> <Image src={website} alt={'Sitio web Icono'} width={25}/> </Link>
              <EmailButton email={servicio.email}/>
            </div>
          </div>

        </div>

        <div className={styles.galeria}>
          <h1 className={styles.galeria__title}>Galeria</h1>

          <GaleriaComponent
            images={photos}
          />

        </div>
      </>
    </Layout>
  );
    
}

export async function getServerSideProps(context) {
    const { params } = context
    const servicios =[
        {
          id: 1,       
          image: allanB,
          title: "Allan Bañuelos ",
          subtitle: "Fotografía | Video ",
          text: "Fotografo y Acapulqueño especializado en fotografia & video de Bodas y eventos asi como  expertos en la captura de la belleza natural de Acapulco y sus alrededores. ",
          url: "allan-banuelos",
          maps: "https://goo.gl/maps/chYKVnnaTG7ZfjbT9",
          direccion: '',
          telefono:"744 484 1929",
          face:'https://www.facebook.com/profile.php?id=100081724249097',
          insta:'https://www.instagram.com/allanbanuelosphotography/',
          website: 'https://www.google.com/',
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
          direccion: '',
          telefono:"744 163 0982",
          face:'https://www.facebook.com/profile.php?id=100086572431112',
          insta:'https://www.instagram.com/downtown.mediamx/',
          website: 'https://www.google.com/',
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
          direccion:'Lomas del Mar 5, Deportivo, 39690 Acapulco de Juárez, Gro., Mexico',
          telefono:"744 278 5788 ",
          face:'https://www.facebook.com/profile.php?id=100087754384581',
          insta:'https://www.instagram.com/keraultra_acapulco/',
          website: 'https://www.google.com/',
          email:'keraultraacapulco@gmail.com'
        }
      ];
    const servicio = servicios.find(servicio => servicio.url === params.url)

    const apiKey = process.env.IMAGE_API
    const response = await fetch(`https://api.pexels.com/v1/search?query=business&orientation=landscape&per_page=10`, {
      headers: {
        Authorization: apiKey
      }
    });
    const data = await response.json();
    const photos = data.photos;

    return {
        props: {
          servicio,
          photos
        }
      }
    
}
