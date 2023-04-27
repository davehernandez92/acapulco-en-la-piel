import Layout from '@/components/layout'
import Youtube from "@/components/youtube";
import GaleriaComponent from '@/components/galeria.jsx'
import EmailButton from '@/components/emailButton'
import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"
import styles from '../../styles/hotel.module.css'

import mapsIcon from '../../../public/google-maps.png'
import facebook from '../../../public/facebook.png'
import instagram from '../../../public/instagram1.png'
import telefono from '../../../public/telephone.png'
import website  from '../../../public/internet.png'


export default function Hotel({hotelData}) {
  const {attributes: hotel} = hotelData


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
              src={hotel.imagenes.data[0].attributes.formats.medium.url}
              width={hotel.imagenes.data[0].attributes.formats.medium.width}
              height={hotel.imagenes.data[0].attributes.formats.medium.height}
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
              <p>{hotel.direccion}</p>
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
                href={`${hotel.website}`}
              >
                {hotel.website && (
                  <>
                    <Image src={website} alt={"Sitio web Icono"} width={25} />
                  </>
                )}
              </Link>

              <EmailButton email={hotel.email} />
            </div>
          </div>
        </div>
        <div className={styles.galeria}>
          <Youtube
            titulo="¡Checa nuestro video de este Hotel!"
            texto={`En este video visitamos por ti el ${hotel.title}, checa de primera mano como llegar a este hotel y conocelo a traves de nuestros ojos primo!  `}
            video={`${hotel.video}`}
          />

          <h1 className={styles.galeria__title}>Galeria</h1>
          <GaleriaComponent images={hotel.imagenes.data} />
        </div>
      </>
    </Layout>
  );
    
}

export async function getServerSideProps(context) {
  const { params } = context;

  const response = await fetch(`${process.env.API_URL}/hoteles?populate=imagenes`)
  const {data}  = await response.json()

  const hotelData = data.find((hotel) => hotel.attributes.url === params.url);




  return {
    props: {
      hotelData
    },
  };
}

