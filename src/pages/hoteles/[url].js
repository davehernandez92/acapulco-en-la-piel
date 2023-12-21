import Layout from '@/components/layout'
import Youtube from "@/components/youtube";
import GaleriaComponent from '@/components/galeria.jsx'
import EmailButton from '@/components/emailButton'
import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import { hotelsData } from "@/json/hotelData";
import styles from '../../styles/hotel.module.css'

import mapsIcon from '../../../public/google-maps.png'
import facebook from '../../../public/facebook.png'
import instagram from '../../../public/instagram1.png'
import telefono from '../../../public/telephone.png'
import website  from '../../../public/internet.png'


export default function Hotel({hotelData}) {

  const hotel = hotelData

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the animation when the element is 50% in view
    triggerOnce: true // Only trigger the animation once
  });

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
              priority={true}
              src={hotel.image}
              width={"500"}
              height={"350"}
              alt={`Imagen de ${hotel.title}`}
              className={styles.image__slide}
            />
          </div>
        </div>

        <motion.div
          className={styles.descripcion}
          ref={ref}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{
            type: "spring",
            stiffness: 110,
            damping: 20,
            duration: 1,
            delay: 0.3,
          }}
        >
          <h3> Descripcion </h3>
          <p>{hotel.text}</p>
        </motion.div>
        <div className={styles.datos}>
          <motion.div
            className={styles.datos__direccion}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 20,
              duration: 0.5,
              delay: 0.6,
            }}
          >
            <h4>Direccion:</h4>
            <Link className={styles.link} href={hotel.maps} target="_blank">
              <p>{hotel.direccion}</p>
              <Image
                className={styles.mapsIcon}
                src={mapsIcon}
                alt={"Google maps Icono"}
              />
            </Link>
          </motion.div>
          <motion.div
            className={styles.datos__contacto}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 20,
              duration: 0.5,
              delay: 0.6,
            }}
          >
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
              <Link
                href={hotel.insta ? hotel.insta : "#"}
                className={(hotel.insta && true) || styles.hidden}
              >
                {hotel.insta && (
                  <Image
                    className={styles.social}
                    src={instagram}
                    alt={"Instagram Icono"}
                  />
                )}
              </Link>
              <Link
                className={
                  (hotel.website && styles.website__icon) || styles.hidden
                }
                href={`${hotel.title}`}
              >
                {hotel.website && (
                  <>
                    <Image src={website} alt={"Sitio web Icono"} width={25} />
                  </>
                )}
              </Link>

              <EmailButton email={hotel.email} />
            </div>
          </motion.div>
        </div>
        <div className={styles.galeria}>
          <Youtube
            titulo="¡Checa nuestro video de este Hotel!"
            texto={`En este video visitamos por ti el ${hotel.title}, checa de primera mano como llegar a este hotel y conocelo a traves de nuestros ojos primo!  `}
            video={`${hotel.video}`}
          />

          <h1 className={styles.galeria__title}>Galeria</h1>
          {/* <GaleriaComponent images={hotel.image} hotel={hotel.title} /> */}
        </div>
      </>
    </Layout>
  );
    
}
export async function getServerSideProps({ query }) {
  const { url } = query;
  // Assuming hotelsData is an array of hotel objects
  const hotelData = hotelsData.find(hotel => hotel.url === url);
  
  
  
  if (!hotelData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      hotelData,
    },
  };
}