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





export default function Servicio({servicioData}) {

  const {attributes: servicio} = servicioData

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
            <Link className={styles.link} href={"/servicios"}>
              Servicios{" "}
            </Link>
            <p> {">"} </p>
            <Link className={styles.link} href={"#"}>
              {servicio.title}
            </Link>
          </div>

          <h1 className={styles.title}>{servicio.title}</h1>
          <h2 className={styles.subtitle}>{servicio.subtitle}</h2>

          <div className={styles.slide}>
            <Image
              src={servicio.imagenes.data[0].attributes.formats.medium.url}
              width={servicio.imagenes.data[0].attributes.formats.medium.width}
              height={
                servicio.imagenes.data[0].attributes.formats.medium.height
              }
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

          {servicio.direccion && (
            <div className={styles.datos__direccion}>
              <h4>Direccion:</h4>
              <Link
                className={styles.link}
                href={servicio.maps}
                target="_blank"
              >
                <p>{servicio.direccion}</p>
                <Image
                  className={styles.mapsIcon}
                  src={mapsIcon}
                  alt={"Google maps Icono"}
                />
              </Link>
            </div>
          )}

          <div className={styles.datos__contacto}>
            <h4>Contacto: </h4>
            <Link
              className={styles.contacto__telLink}
              href={`tel:${servicio.telefono}`}
            >
              Telefono: {servicio.telefono}
              <Image
                className={styles.contacto__telIcono}
                src={telefono}
                alt={"Telefono Icono"}
              />
            </Link>
            <p>Conecta con {servicio.title}: </p>

            <div className={styles.datos__iconos}>
              {servicio.face && (
                <Link href={servicio.face} target="_blank">
                  <Image
                    className={styles.social}
                    src={facebook}
                    alt={"Facebook Icono"}
                  />
                </Link>
              )}

              {servicio.insta && (
                <Link href={servicio.insta} target="_blank">
                  <Image
                    className={styles.social}
                    src={instagram}
                    alt={"Instagram Icono"}
                  />
                </Link>
              )}

              {servicio.email && (
                <Link
                  className={
                    (servicio.website && styles.website__icon) || styles.hidden
                  }
                  href={`${servicio.website}`}
                >
                  <>
                    <Image src={website} alt={"Sitio web Icono"} width={25} />
                  </>
                </Link>
              )}

              {servicio.email && <EmailButton email={servicio.email} />}
            </div>
          </div>
        </div>

        <div className={styles.galeria}>
          <h1 className={styles.galeria__title}>Galeria</h1>

          <GaleriaComponent images={servicio.imagenes.data} />
        </div>
      </>
    </Layout>
  );
    
}

export async function getServerSideProps(context) {
    const { params } = context
   

  const response = await fetch(`${process.env.API_URL}/servicios?populate=imagenes`)
  const {data} = await response.json()
  const servicioData = data.find(servicio => servicio.attributes.url === params.url)
  return {
    props:{
      servicioData
    }
  }
    
}
