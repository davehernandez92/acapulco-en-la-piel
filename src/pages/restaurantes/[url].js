import Layout from '@/components/layout'
import GaleriaComponent from '@/components/galeria.jsx'
import { useRouter } from "next/router"
import EmailButton from '@/components/emailButton'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import styles from '../../styles/hotel.module.css'
import rest1 from "../../../public/restaurantes/rosmarImagen.webp"
import rest3 from "../../../public/restaurantes/restDesk2.webp"
import tarascos from "../../../public/restaurantes/tarascos.webp"
import mapsIcon from '../../../public/google-maps.png'
import facebook from '../../../public/facebook.png'
import instagram from '../../../public/instagram1.png'
import telefono from '../../../public/telephone.png'
import website  from '../../../public/internet.png'





export default function Restaurante({restaurante, photos}) {

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
            <Link className={styles.link} href={"/restaurantes"}>Restaurantes </Link>
            <p> {">"} </p>
            <Link className={styles.link} href={'#'}>{restaurante.title}</Link>
          </div>

          <h1 className={styles.title}>{restaurante.title}</h1>
          <h2 className={styles.subtitle}>{restaurante.subtitle}</h2>

          <div className={styles.slide}>
            <Image
              src={restaurante.image}
              alt={`Imagen de ${restaurante.title}`}
              className={styles.image__slide}
            />
          </div>

        </div>

        <div className={styles.descripcion}>
          <h3> Descripcion </h3>
          <p>{restaurante.text}</p>
        </div>
        <div className={styles.datos}>
          <div className={styles.datos__direccion}>
            <h4>Direccion:</h4>
            <Link className={styles.link} href={restaurante.maps} target="_blank">
              <p>{restaurante.direccion}</p>
              <Image className={styles.mapsIcon} src={mapsIcon} alt={'Google maps Icono'}/>
            </Link>
          </div>
          <div className={styles.datos__contacto}>
            <h4>Contacto: </h4>
            <Link className={styles.contacto__telLink} href={`tel:${restaurante.telefono}`}>Telefono: {restaurante.telefono}
            <Image className={styles.contacto__telIcono} src={telefono} alt={'Telefono Icono'}/>
            </Link>
            <p>Conecta con {restaurante.title}: </p>
            
            <div className={styles.datos__iconos}> 
              <Link href={restaurante.face} target="_blank">
                <Image className={styles.social} src={facebook} alt={'Facebook Icono'} />

              </Link>
              <Link href={restaurante.insta} target="_blank">
                <Image className={styles.social} src={instagram} alt={'Instagram Icono'}/>

              </Link>
              <Link className={styles.website__icon} href={restaurante.website} target="_blank"> <Image src={website} alt={'Sitio web Icono'} width={25}/> </Link>
              <EmailButton email={restaurante.email}/>
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
    const restaurantes = [
      { 
        id: 1,       
        image: rest1,
        title: "Rosmar Restaurante",
        subtitle: "Cocina tradicional evolutiva | Restaurante",
        text: " Cocina Tradicional Evolutiva, restaurante ocupado y preocupado por el rescate del ingrediente local bajo la visión del Chef Javier Reynada",
        url: "rosmar",
        maps: "https://goo.gl/maps/c7LhgjeUjE7y71qB9",
        direccion: "Av. Manuel Gómez Morín. Fracc. Hornos Insurgentes Parque Papagayo #1, 39350 Acapulco de Juárez, Gro., Mexico",
        telefono:"744 480 1655",
        face:'https://www.facebook.com/rosmar.restaurante',
        insta:'https://www.instagram.com/rosmarrestaurante/',
        website: 'https://www.google.com/',
        email:'rosmarrest@hotmail.com'
      },
      { 
        id: 2,     
        image: tarascos,
        title: "Tacos Los Tarascos",
        subtitle: "Acapulco | Taqueria",
        text: "Cuando dicen que Los Tarascos es una Taquería con variedad, también están en lo cierto, Tacos  al pastor, tacos de pollo, tacos de bistec, tacos de chorizo, tacos de chuleta y de costilla en tortilla de maíz o harina ",
        url: "tarascos",
        maps: "https://goo.gl/maps/asepURYBc1hkihMG8",
        direccion:'Este restaurante cuenta con varias sucursales al rededor de Acapulco',
        telefono:"7443302944",
        face:'https://www.facebook.com/lostarascosoficial',
        insta:'https://www.instagram.com/lostarascos/',
        website:'https://lostarascos.com.mx/',
        email:'atencion.lostarascos@gmail.com'
      },
      {
        id: 3,  
        image: rest3,
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
    const restaurante = restaurantes.find(restaurante => restaurante.url === params.url)

    const apiKey = process.env.IMAGE_API
    const response = await fetch(`https://api.pexels.com/v1/search?query=restaurants&orientation=landscape&per_page=10`, {
      headers: {
        Authorization: apiKey
      }
    });
    const data = await response.json();
    const photos = data.photos;

    return {
        props: {
          restaurante,
          photos
        }
      }
    
}
