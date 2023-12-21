import Layout from '@/components/layout'
import Card from '@/components/card';
import Link from 'next/link';
import { servData } from '@/json/servData';
import heroCSS from '../styles/heroServicios.module.css'
import styles from '../styles/hoteles.module.css'


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
              <h2>Brother requieres de algun producto o servicio?</h2>
            </div>
            <div className={styles.card__wrapper}>
              {servicios.map((servicio) => (
                <Card
                key={servicio.id}
                path={'servicios'}
                image={servicio.image}
                  width={servicio.width}
                  height={servicio.height}
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

export async function getServerSideProps() {
  return {
    props: {
      servicios: servData,
    },
  };
}