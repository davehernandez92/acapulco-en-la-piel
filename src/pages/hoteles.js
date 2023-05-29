import { useState } from 'react';
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import Layout from '@/components/layout'

import Link from 'next/link';
import heroCSS from '../styles/hero.module.css'
import styles from '../styles/hoteles.module.css'
import loader from '../styles/loader.module.css'
// Dynamically import the Card component
const Card = dynamic(() => import('@/components/card'), { ssr: false });

export default function Hoteles({ initialHotels }) {
  const [hotels, setHotels] = useState(initialHotels);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the animation when the element is 50% in view
    triggerOnce: true // Only trigger the animation once
  });

  
  
 
  return (
    <Layout title={"Hoteles"}>
      <>
        <div>
          <div className={heroCSS.hero}>
            <div className={styles.heading__wrapp}>
              <h1 className={styles.hoteles__heading}>Hoteles</h1>
            </div>
          </div>

          <div className={styles.navegacion}>
            <Link href={"/"}>Inicio </Link>
            <p> {">"} </p>
            <Link href={"#"}>Hoteles </Link>
          </div>

          <motion.div
            ref={ref}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 20,
              duration: 1.3,
              delay:0.3,
            }}
            className={styles.hoteles__subtitle}
          >
            <h2>Checa nuestra lista de Hoteles!</h2>
          </motion.div>

          {isLoading ? (
            <div className={`${loader.ldsellipsis} `}></div>
          ) : (
          <div className={styles.card__wrapper}>
            {hotels.map((hotel) => (
              <Card
                key={hotel.id}
                path={"hoteles"}
                image={
                  hotel.attributes.imagenes.data[0].attributes.formats.small.url
                }
                width={
                  hotel.attributes.imagenes.data[0].attributes.formats.small
                    .width
                }
                height={
                  hotel.attributes.imagenes.data[0].attributes.formats.small
                    .height
                }
                title={hotel.attributes.title}
                subtitle={hotel.attributes.subtitle}
                text={hotel.attributes.text}
                url={hotel.attributes.url}
              />
            ))}
          </div>
          )}

          
        </div>
      </>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/hoteles?populate=imagenes`);
  const { data } = await response.json();

  return {
    props: {
      initialHotels: data,
    },
    revalidate: 60, // Revalidate every 60 seconds for incremental static regeneration
  };
}
