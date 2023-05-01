import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion"
import Layout from '@/components/layout'
import Main from '@/components/main';
import Youtube from "@/components/youtube";
import Image from 'next/image';
import logo from "../../public/Acapulco-logo.png"
import heroCSS from '../styles/hero.module.css'


export default function Home() {
  const [shouldRenderYoutube, setShouldRenderYoutube] = useState(false);
  const youtubeRef = useRef(null);
 
  //useEffect hook to observe the element and set shouldRenderYoutube to true when it's in view

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShouldRenderYoutube(true);
        observer.disconnect();
      }
    },
    {
      rootMargin: "0px",
      threshold: 0.5,
    }
  );
  if (youtubeRef.current) {
    observer.observe(youtubeRef.current);
  }
}, [youtubeRef]);
  return (
    <>
      <Layout title={"Inicio"}>
        <div className={heroCSS.hero}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 68,
              damping: 20,
              delay: 0.5,
            }}
          >
            <Image
              src={logo}
              alt={"Acapulco en la piel logo"}
              width={150}
              height={150}
              priority
            />
          </motion.div>
        </div>

        <main>
          <Main />
        </main>
        <div ref={youtubeRef}>
          {shouldRenderYoutube && (
            <Youtube
              titulo="Conoce nuestro canal de Youtube"
              texto="¡Hey! ¿Estás buscando contenido interesante y entretenido en YouTube sobre Acapulco?
          ¡Tenemos justo lo que necesitas! Entra y conoce nuestro canal y
          descubre todo Acapulco en un solo lugar. Desde hoteles, restaurantes,
          playas y los mejores lugares que debes conocer."
              video={"03eVtzPaCo8"}
            />
          )}
        </div>
      </Layout>
    </>
  );
}
