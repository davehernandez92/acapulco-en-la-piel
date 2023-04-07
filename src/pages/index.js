import { motion } from "framer-motion"
import Layout from '@/components/layout'
import Main from '@/components/main';
import Youtube from "@/components/youtube";
import Image from 'next/image';
import logo from "../../public/Acapulco-logo.png"
import heroCSS from '../styles/hero.module.css'


export default function Home() {
  

  return (
    <>
      <Layout title={"Inicio"}>
        
          <div className={heroCSS.hero}>
          <motion.div animate={{ y: -20 }} transition={{ delay: 1 }}>
              <Image src={logo} alt={'Acapulco en la piel logo'}/>

            </motion.div>
          </div>
        
        

          <main>
            <Main/>
          </main>
          <Youtube/>

      </Layout>
    </>
  );
}
