import Layout from '@/components/layout'
import Link from 'next/link';
import styles from '../styles/visita.module.css'

export default function Visita() {

  return (
    <>  
      <Layout title={"Visita"}>
          <div className={styles.hero}>
            <div className={styles.heading__wrapp}>
              <h1 className={styles.hoteles__heading}>Visita estos lugares!</h1>
            </div>
          </div>

      </Layout>
    </>
  );
}
