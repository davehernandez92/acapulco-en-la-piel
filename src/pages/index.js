import { motion } from "framer-motion"
import Layout from '@/components/layout'
import Main from '@/components/main';
import Youtube from "@/components/youtube";
import Image from 'next/image';
import logo from "../../public/Acapulco-logo.png"
import heroCSS from '../styles/hero.module.css'


export default function Home({videoId}) {
  
  console.log(videoId.attributes.codigo);
  return (
    <>
      <Layout title={"Inicio"}>
        <div className={heroCSS.hero}>
          <motion.div animate={{ y: -20 }} transition={{ delay: 1 }}>
            <Image src={logo} alt={"Acapulco en la piel logo"} width={310} height={310}/>
          </motion.div>
        </div>

        <main>
          <Main />
        </main>
        <Youtube
          titulo="Conoce nuestro canal de Youtube"
          texto="¡Hey! ¿Estás buscando contenido interesante y entretenido en YouTube sobre Acapulco?
          ¡Tenemos justo lo que necesitas! Entra y conoce nuestro canal y
          descubre todo Acapulco en un solo lugar. Desde hoteles, restaurantes,
          playas y los mejores lugares que debes conocer."
          video={`${videoId.attributes.codigo}`}
        />
      </Layout>
    </>
  );
}
export async function getServerSideProps(context) {
  const { params } = context;

  const response = await fetch(`${process.env.API_URL}/youtube`)
  const {data}  = await response.json()

  const videoId = data




  return {
    props: {
      videoId
    },
  };
}

