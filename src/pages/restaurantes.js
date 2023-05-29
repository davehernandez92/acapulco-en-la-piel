import { useState } from 'react';
import Layout from '@/components/layout'
import Card from '@/components/card';
import heroCSS from '../styles/heroRest.module.css'
import loader from '../styles/loader.module.css'
import styles from '../styles/hoteles.module.css'


import Link from 'next/link';

export default function Restaurantes({restaurantes}) {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <Layout title="Restaurantes">
        <div className={`${loader.ldsellipsis} `}></div>
      </Layout>
    );
  }
  
  return (
    <Layout title={"Restaurantes"}>
      <>
        <div>
          <div className={heroCSS.hero}>
            <div className={styles.heading__wrapp}>
              
            </div>
          </div>

          <div className={styles.navegacion}>
            <Link href={"/"}>Inicio </Link>
            <p> {">"} </p>
            <Link href={"#"}>Restaurantes</Link>
          </div>

          <div className={styles.hoteles__subtitle}>
            <h2>¿Hambre? Checa estos restaurantes primo!</h2>
          </div>
          <div className={styles.card__wrapper}>
            {restaurantes.map((restaurante) => (
              <Card
                key={restaurante.id}
                path={'restaurantes'}
                image={restaurante.attributes.imagenes.data[0].attributes.formats.small.url}
                width={restaurante.attributes.imagenes.data[0].attributes.formats.small.width}
                height={restaurante.attributes.imagenes.data[0].attributes.formats.small.height}
                title={restaurante.attributes.title}
                subtitle={restaurante.attributes.subtitle}
                text={restaurante.attributes.text}
                url={restaurante.attributes.url}
              />
            ))}
           
          </div>
        </div>
      </>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(`${process.env.API_URL}/restaurantes?populate=imagenes`);
    const { data } = await response.json();

    return {
      props: {
        restaurantes: data,
      },
      revalidate: 60, // Revalidate every 60 seconds for incremental static regeneration
    };
  } catch (error) {
    console.error('Error fetching restaurantes:', error);
    return {
      props: {
        restaurantes: [],
      },
    };
  }
  
}
