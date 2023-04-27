import Layout from '@/components/layout'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/visita.module.css'

export default function Visita() {

  return (
    <>
      <Layout title={"Visita"}>
        <div className={styles.hero}>
          <div className={styles.heading__wrapp}>
            <h1 className={styles.heading}>Visita estos lugares!</h1>
          </div>
        </div>
        {/* Museos */}
        <main className={styles.main}>
          <div className={styles.main__heading}>
            <h1>Museos en Acapulco</h1>
            <p>Porque sabemos que Acapulco es mucho mas que sol y playas!</p>
          </div>
          <div className={styles.grid}>
            <Link href={"/"} target="_blank" className={`${styles.gridItem__h} ${styles.h} `}>
              <Image
                src={"https://unsplash.it/700/400"}
                width={600}
                height={400}
                alt={"Unsplash basic"}
              />
              <h3>Fuerte de San Diego</h3>
              <p className={styles.item__description}>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco.
              </p>
            </Link>

            <Link href={"/"} target="_blank" className={`${styles.gridItem__v} ${styles.v} `}>
              <Image
                src={"https://unsplash.it/400/600"}
                width={600}
                height={900}
                alt={"Unsplash basic"}
              />
              <h3>Museo Histórico Naval</h3>
              <p className={styles.item__description}>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco.
              </p>
            </Link>

            <Link href={"/"} target="_blank" className={`${styles.gridItem__h} ${styles.h2} `}>
              <Image
                src={"https://unsplash.it/700/400"}
                width={600}
                height={400}
                alt={"Unsplash basic"}
              />
              <h3>Museo de la Máscara Guerrero</h3>
              <p className={styles.item__description}>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco.
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco.
                Acapulco.
              </p>
            </Link>

            <Link href={"/"} target="_blank" className={`${styles.gridItem__v} ${styles.v2} `}>
              <Image
                src={"https://unsplash.it/400/600"}
                width={600}
                height={900}
                alt={"Unsplash basic"}
              />
              <h3>Museo Histórico Naval</h3>
              <p className={styles.item__description}>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco.
              </p>
            </Link>
          </div>
        </main>
        {/* Plazas */}
        <section className={styles.main}>
          <div className={styles.main__heading}>
            <h1>Plazas</h1>
            <p>Ya sea que quieras ir al cine o de compras, siempre habra algo nuevo que ver o hacer, checa estas plazas ! </p>
          </div>
          <div className={`${styles.grid} ${styles.grid2}`}>
            <Link href={"/"} target="_blank" className={`${styles.gridItem__h} ${styles.h} `}>
              <Image
                src={"https://unsplash.it/700/400"}
                width={600}
                height={400}
                alt={"Unsplash basic"}
              />
              <h3>Plaza Galerias Diana</h3>
              <p className={styles.item__description}>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco.
              </p>
            </Link>

            <Link href={"/"} target="_blank" className={`${styles.gridItem__v} ${styles.v} `}>
              <Image
                src={"https://unsplash.it/700/400"}
                width={600}
                height={900}
                alt={"Unsplash basic"}
              />
              <h3>Plaza Isla Diamante</h3>
              <p className={styles.item__description}>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco.
              </p>
            </Link>

            <Link href={"/"} target="_blank" className={`${styles.gridItem__h} ${styles.h2} `}>
              <Image
                src={"https://unsplash.it/700/400"}
                width={600}
                height={900}
                alt={"Unsplash basic"}
              />
              <h3>Plaza Galerias Acapulco</h3>
              <p className={styles.item__description}>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco.
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco.
                Acapulco.
              </p>
            </Link>

            <Link href={"/"} target="_blank" className={`${styles.gridItem__v} ${styles.v2} `}>
              <Image
                src={"https://unsplash.it/400/600"}
                width={600}
                height={900}
                alt={"Unsplash basic"}
              />
              <h3>Plaza Marbella</h3>
              <p className={styles.item__description}>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco.
              </p>
            </Link>
          </div>
        </section>
        {/* Sitios de interes */}
        <section className={styles.main}>
          <div className={styles.main__heading}>
            <h1>Sitios de Interes!</h1>
            <p>Debes visitar estos lugares! </p>
          </div>
          <div className={styles.grid}>
            <Link href={"/"} target="_blank" className={`${styles.gridItem__h} ${styles.h} `}>
              <Image
                src={"https://unsplash.it/700/400"}
                width={600}
                height={400}
                alt={"Unsplash basic"}
              />
              <h3>La Quebrada</h3>
              <p className={styles.item__description}>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco.
              </p>
            </Link>

            <Link href={"/"} target="_blank" className={`${styles.gridItem__v} ${styles.v} `}>
              <Image
                src={"https://unsplash.it/400/600"}
                width={600}
                height={900}
                alt={"Unsplash basic"}
              />
              <h3>Parque Papagayo</h3>
              <p className={styles.item__description}>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco.
              </p>
            </Link>

            <Link href={"/"} target="_blank" className={`${styles.gridItem__h} ${styles.h2} `}>
              <Image
                src={"https://unsplash.it/700/400"}
                width={600}
                height={400}
                alt={"Unsplash basic"}
              />
              <h3>Sinfonia del Mar</h3>
              <p className={styles.item__description}>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco.
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco.
                Acapulco.
              </p>
            </Link>

            <Link href={"/"} target="_blank" className={`${styles.gridItem__v} ${styles.v2} `}>
              <Image
                src={"https://unsplash.it/400/600"}
                width={600}
                height={900}
                alt={"Unsplash basic"}
              />
              <h3>Jardin Botanico de Acapulco</h3>
              <p className={styles.item__description}>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco.
              </p>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
