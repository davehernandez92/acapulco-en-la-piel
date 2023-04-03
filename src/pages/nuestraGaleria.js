import React from 'react'
import Link from 'next/link'
import Layout from '@/components/layout'
import GaleriaComponent from '@/components/galeria'
import styles from '../styles/galeriaPage.module.css'


export default function NuestraGaleria({photos}) {
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
export async function getServerSideProps(){
  const apiKey = process.env.IMAGE_API
    const response = await fetch(`https://api.pexels.com/v1/search?query=miami&orientation=landscape&per_page=20`, {
      headers: {
        Authorization: apiKey
      }
    });
    const data = await response.json();
    const photos = data.photos;

    return {
        props: {
          
          photos
        }
      }
}
