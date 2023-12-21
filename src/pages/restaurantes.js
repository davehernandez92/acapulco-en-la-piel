import { useState } from 'react';
import Layout from '@/components/layout'
import Card from '@/components/card';
import heroCSS from '../styles/heroRest.module.css'
import loader from '../styles/loader.module.css'
import styles from '../styles/hoteles.module.css'
import { restData } from '@/json/restaurantesData';

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
                image={restaurante.image}
                  width={restaurante.width}
                  height={restaurante.height}
                  title={restaurante.title}
                  subtitle={restaurante.subtitle}
                  text={restaurante.text}
                  url={restaurante.url}
              />
            ))}
           
          </div>
        </div>
      </>
    </Layout>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      restaurantes: restData,
    },
  };
}
