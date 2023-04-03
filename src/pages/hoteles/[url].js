import Layout from '@/components/layout'
import GaleriaComponent from '@/components/galeria.jsx'
import EmailButton from '@/components/emailButton'
import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import styles from '../../styles/hotel.module.css'
import hotel1 from "../../../public/DESKTOP/costaAzul.avif"
import hotel2 from "../../../public/DESKTOP/WEB3.jpg"
import hotel3 from "../../../public/DESKTOP/WEB4.jpg"
import mapsIcon from '../../../public/google-maps.png'
import facebook from '../../../public/facebook.png'
import instagram from '../../../public/instagram1.png'
import telefono from '../../../public/telephone.png'
import website  from '../../../public/internet.png'





export default function Hotel({hotel, photos}) {
  

    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>
      }
    
    
      
   
  return (
    <Layout>
      <>
        <div>
          <div className={styles.navegacion}>
            <Link className={styles.link} href={"/"}>
              Inicio{" "}
            </Link>
            <p> {">"} </p>
            <Link className={styles.link} href={"/hoteles"}>
              Hoteles{" "}
            </Link>
            <p> {">"} </p>
            <Link className={styles.link} href={"#"}>
              {hotel.title}
            </Link>
          </div>

          <h1 className={styles.title}>{hotel.title}</h1>
          <h2 className={styles.subtitle}>{hotel.subtitle}</h2>

          <div className={styles.slide}>
            <Image
              src={hotel.image}
              alt={`Imagen de ${hotel.title}`}
              className={styles.image__slide}
            />
          </div>
        </div>

        <div className={styles.descripcion}>
          <h3> Descripcion </h3>
          <p>{hotel.text}</p>
        </div>
        <div className={styles.datos}>
          <div className={styles.datos__direccion}>
            <h4>Direccion:</h4>
            <Link className={styles.link} href={hotel.maps} target="_blank">
              <p>
                Horacio Nelson S/N, Fracc Costa Azul, Costa Azul, 39850 Acapulco
                de Juárez, Gro., Mexico
              </p>
              <Image
                className={styles.mapsIcon}
                src={mapsIcon}
                alt={"Google maps Icono"}
              />
            </Link>
          </div>
          <div className={styles.datos__contacto}>
            <h4>Contacto: </h4>
            <Link
              className={styles.contacto__telLink}
              href={`tel:${hotel.telefono}`}
            >
              Telefono: {hotel.telefono}
              <Image
                className={styles.contacto__telIcono}
                src={telefono}
                alt={"Telefono Icono"}
              />
            </Link>
            <p>Conecta con {hotel.title}: </p>

            <div className={styles.datos__iconos}>
              <Link href={hotel.face}>
                <Image
                  className={styles.social}
                  src={facebook}
                  alt={"Facebook Icono"}
                />
              </Link>
              <Link href={hotel.insta}>
                <Image
                  className={styles.social}
                  src={instagram}
                  alt={"Instagram Icono"}
                />
              </Link>
              <Link
                className={styles.website__icon}
                href={"https://www.hotelcostaazul.mx/"}
              >
                {" "}
                <Image src={website} alt={"Sitio web Icono"} width={25} />{" "}
              </Link>
              <EmailButton email={hotel.email} />
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
    const hotels = [
      {
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
        image: hotel2,
        title: "Hotel Name 2",
        subtitle: "Hotel Subtitle 2",
        text: "Hotel Description 2",
        url: "hotel-name-2",
        maps: "https://goo.gl/maps/MRVYwQPHDYtHxXjK7",
        telefono:"744 484 1929",
        face:'https://www.facebook.com/hotelcostaazulacapulco?fref=ts',
        insta:'https://www.instagram.com/hotelcostaazulacapulco/?utm_medium=copy_link',
        email:'info@hotelcostaazul.mx'
      },
      {
        image: hotel3,
        title: "Hotel Name 3",
        subtitle: "Hotel Subtitle 3",
        text: "Hotel Description 3",
        url: "hotel-name-3",
      },
    ];

    
    const hotel = hotels.find(hotel => hotel.url === params.url)
    const apiKey = process.env.IMAGE_API
    const response = await fetch(`https://api.pexels.com/v1/search?query=hotels&orientation=landscape&per_page=10`, {
      headers: {
        Authorization: apiKey
      }
    });
    const data = await response.json();
    const photos = data.photos;
    return {
        props: {
          hotel,
          photos
          
        }
      }
    
}
