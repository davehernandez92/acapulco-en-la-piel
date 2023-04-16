import Layout from '@/components/layout'
import styles from '../styles/mercancia.module.css'
import Link from 'next/link';


export default function Mercancia() {

  return (
    <>
      <Layout title={"Mercancia"}>
          <div className={styles.hero}>

          </div>
            <Link className={styles.link} href={'/'}>Volver a inicio</Link>

      </Layout>
    </>
  );
}
