import React from 'react'
import Link from 'next/link'
import Layout from '@/components/layout'
import GaleriaComponent from '@/components/galeria'
import styles from '../styles/galeriaPage.module.css'


export default function NuestraGaleria({data}) {

  const {attributes: photos} = data
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
              images={photos.imagenes.data}
            />

          </div>

        </main>
    </>
    </Layout>
  )
}
export async function getServerSideProps(){
  
  const response = await fetch(`${process.env.API_URL}/galeria?populate=imagenes`)
  const {data} = await response.json()
    return {
        props: {
          
          data
        }
      }
}
