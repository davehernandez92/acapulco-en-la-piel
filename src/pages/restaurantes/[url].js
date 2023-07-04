import Layout from '@/components/layout'
import GaleriaComponent from '@/components/galeria.jsx'
import { useRouter } from "next/router"
import EmailButton from '@/components/emailButton'
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import styles from '../../styles/hotel.module.css'

import mapsIcon from '../../../public/google-maps.png'
import facebook from '../../../public/facebook.png'
import instagram from '../../../public/instagram1.png'
import telefono from '../../../public/telephone.png'
import website  from '../../../public/internet.png'





export default function Restaurante({ restauranteData }) {
 
  const { attributes: restaurante } = restauranteData
  
  const router = useRouter();
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the animation when the element is 50% in view
    triggerOnce: true // Only trigger the animation once
  });

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
            <Link className={styles.link} href={"/restaurantes"}>
              Restaurantes{" "}
            </Link>
            <p> {">"} </p>
            <Link className={styles.link} href={"#"}>
              {restaurante.title}
            </Link>
          </div>

          <h1 className={styles.title}>{restaurante.title}</h1>
          <h2 className={styles.subtitle}>{restaurante.subtitle}</h2>

          <div className={styles.slide}>
            <Image
              priority={true}
              src={restaurante.imagenes.data[0].attributes.formats.medium.url}
              width={
                restaurante.imagenes.data[0].attributes.formats.medium.width
              }
              height={
                restaurante.imagenes.data[0].attributes.formats.medium.height
              }
              alt={`Imagen de ${restaurante.title}`}
              className={styles.image__slide}
            />
          </div>
        </div>

        <motion.div className={styles.descripcion}
        ref={ref}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{
            type: "spring",
            stiffness: 110,
            damping: 20,
            duration: 0.5,
            delay: 0.6,
          }}
        >
          <h3> Descripcion </h3>
          <p>{restaurante.text}</p>
        </motion.div>
        <div className={styles.datos}>
          <motion.div className={styles.datos__direccion}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
          transition={{
            type: "spring",
            stiffness: 110,
            damping: 20,
            duration: 0.5,
            delay: 0.6,
          }}
          >
            <h4>Direccion:</h4>
            <Link
              className={styles.link}
              href={restaurante.maps}
              target="_blank"
            >
              <p>{restaurante.direccion}</p>
              <Image
                className={styles.mapsIcon}
                src={mapsIcon}
                alt={"Google maps Icono"}
              />
            </Link>
          </motion.div>
          <motion.div className={styles.datos__contacto}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
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
              href={`tel:${restaurante.telefono}`}
            >
              Telefono: {restaurante.telefono}
              <Image
                className={styles.contacto__telIcono}
                src={telefono}
                alt={"Telefono Icono"}
              />
            </Link>
            <p>Conecta con {restaurante.title}: </p>

            <div className={styles.datos__iconos}>
              <Link 
                href={restaurante.face ? restaurante.face : "#"} target="_blank">
                className={(restaurante.face && true) || styles.hidden}

                {restaurante.face && (
                  <Image
                    className={styles.social}
                    src={facebook}
                    alt={"Facebook Icono"}
                  />
                )}
              </Link>
              <Link
                href={restaurante.insta ? restaurante.insta : "#"}
                className={(restaurante.insta && true) || styles.hidden}
              >
                {restaurante.insta && (
                  <Image
                    className={styles.social}
                    src={instagram}
                    alt={"Instagram Icono"}
                  />
                )}
              </Link>
              <Link
                className={
                  (restaurante.website && styles.website__icon) || styles.hidden
                }
                href={`${restaurante.website}`}
              >
                {restaurante.website && (
                  <>
                    <Image src={website} alt={"Sitio web Icono"} width={25} />
                  </>
                )}
              </Link>

              {restaurante.email && (   
                <EmailButton email={restaurante.email} />
              )}
            </div>
          </motion.div>
        </div>

        <div className={styles.galeria}>
          <h1 className={styles.galeria__title}>Galeria</h1>

          <GaleriaComponent images={restaurante.imagenes.data} />
        </div>
      </>
    </Layout>
  );
    
}

export async function getServerSideProps({ query }) {
  const { url } = query;
  const response = await fetch(`${process.env.API_URL}/restaurantes?populate=imagenes`);
  const { data } = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const restauranteData = data.find(restaurante => restaurante.attributes.url === url);

  return {
    props: {
      restauranteData: restauranteData || null,
    }
  };
}
