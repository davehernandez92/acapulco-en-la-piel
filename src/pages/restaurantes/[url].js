import Layout from '@/components/layout'
import GaleriaComponent from '@/components/galeria.jsx'
import { useRouter } from "next/router"
import EmailButton from '@/components/emailButton'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import styles from '../../styles/hotel.module.css'

import mapsIcon from '../../../public/google-maps.png'
import facebook from '../../../public/facebook.png'
import instagram from '../../../public/instagram1.png'
import telefono from '../../../public/telephone.png'
import website  from '../../../public/internet.png'





export default function Restaurante({restauranteData}) {

    const {attributes: restaurante} = restauranteData

    
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

        <div className={styles.descripcion}>
          <h3> Descripcion </h3>
          <p>{restaurante.text}</p>
        </div>
        <div className={styles.datos}>
          <div className={styles.datos__direccion}>
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
          </div>
          <div className={styles.datos__contacto}>
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
          </div>
        </div>

        <div className={styles.galeria}>
          <h1 className={styles.galeria__title}>Galeria</h1>

          <GaleriaComponent images={restaurante.imagenes.data} />
        </div>
      </>
    </Layout>
  );
    
}

export async function getServerSideProps(context) {
    const { params } = context
  
    
    const response = await fetch(`${process.env.API_URL}/restaurantes?populate=imagenes`)
    const {data} = await response.json()
    
    const restauranteData = data.find(restaurante => restaurante.attributes.url === params.url)
   
    return {
        props: {
          restauranteData
        }
      }
    
}
