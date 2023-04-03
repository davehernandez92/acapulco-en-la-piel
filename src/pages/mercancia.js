import Layout from '@/components/layout'
import styles from '../styles/mercancia.module.css'
import Link from 'next/link';


export default function Mercancia() {

  return (
    <>
      <Layout title={"Mercancia"}>
          <div className={styles.hero}>
            <h1> PROXIMAMENTE</h1>
            <Link href={'/'}>Volver a inicio</Link>
          </div>

      </Layout>
    </>
  );
}
