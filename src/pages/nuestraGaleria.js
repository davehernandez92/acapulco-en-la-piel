import React from 'react'
import Link from 'next/link'
import Layout from '@/components/layout'
import GaleriaComponent from '@/components/galeria'
import styles from '../styles/galeriaPage.module.css'
import { getGaleriaImages } from '@/utils/cloudinary'

export default function NuestraGaleria({publicIds}) {

  const photos= publicIds
  return (
    <Layout>

    
    <>
       <div className={styles.navegacion}>
            <Link href={"/"}>Inicio </Link>
            <p> {">"} </p>
            <Link href={"#"}>Galeria </Link>
        </div>
        <main>
          <div className={styles.galeria__title}>
              <h1> Nuestra Galeria !</h1>
          </div>
          <div className={styles.galeria}>
            <GaleriaComponent
              images={photos}
            />

          </div>

        </main>
    </>
    </Layout>
  )
}
export async function getServerSideProps() {
  const publicIds = await getGaleriaImages();
  

  return {
    props: {
      publicIds,
    },
  };
}