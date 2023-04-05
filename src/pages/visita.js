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
        <main className={styles.main}>
          <div className={styles.main__heading}>
            <h1>Museos en Acapulco</h1>
            <p>Porque sabemos que Acapulco es mucho mas que sol y playas!</p>
          </div>
          <div className={styles.grid}>
            <Link href={"/"} target="_blank" className={styles.gridItem__v}>
              <Image
                src={"https://unsplash.it/600/400"}
                width={600}
                height={400}
                alt={"Unsplash basic"}
              />
              <h3>Fuerte de San Diego</h3>
              {/* <p>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco: su población original, la navegación a vela, los
                galeones de Manila, el comercio inicial con China a través de
                las Filipinas, las expediciones misioneras, los ataques piratas
                y el asedio durante la Guerra de Independencia.
              </p> */}
            </Link>

            <Link href={"/"} target="_blank" className={styles.gridItem__h}>
              <Image
                src={"https://unsplash.it/400/600"}
                width={400}
                height={600}
                alt={"Unsplash basic"}
              />
              <h3>Museo Histórico Naval</h3>
              {/* <p>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco: su población original, la navegación a vela, los
                galeones de Manila, el comercio inicial con China a través de
                las Filipinas, las expediciones misioneras, los ataques piratas
                y el asedio durante la Guerra de Independencia.
              </p> */}
            </Link>

            <Link href={"/"} target="_blank" className={styles.gridItem__v}>
              <Image
                src={"https://unsplash.it/600/400"}
                width={600}
                height={400}
                alt={"Unsplash basic"}
              />
              <h3>Museo de la Máscara Guerrero</h3>
              {/* <p>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco: su población original, la navegación a vela, los
                galeones de Manila, el comercio inicial con China a través de
                las Filipinas, las expediciones misioneras, los ataques piratas
                y el asedio durante la Guerra de Independencia.
              </p> */}
            </Link>
          </div>
        </main>

        <section className={styles.main}>
          <div className={styles.main__heading}>
            <h1>Plazas!</h1>
            <p>Conoce las plazas en Acapulco!</p>
          </div>
          <div className={styles.grid}>
            <Link href={"/"} target="_blank" className={styles.gridItem__v}>
              <Image
                src={"https://unsplash.it/600/400"}
                width={600}
                height={400}
                alt={"Unsplash basic"}
              />
              <h3>Galerías Acapulco</h3>
              {/* <p>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco: su población original, la navegación a vela, los
                galeones de Manila, el comercio inicial con China a través de
                las Filipinas, las expediciones misioneras, los ataques piratas
                y el asedio durante la Guerra de Independencia.
              </p> */}
            </Link>

            <Link href={"/"} target="_blank" className={styles.gridItem__h}>
              <Image
                src={"https://unsplash.it/400/600"}
                width={400}
                height={600}
                alt={"Unsplash basic"}
              />
              <h3>Plaza Isla Diamante</h3>
              {/* <p>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco: su población original, la navegación a vela, los
                galeones de Manila, el comercio inicial con China a través de
                las Filipinas, las expediciones misioneras, los ataques piratas
                y el asedio durante la Guerra de Independencia.
              </p> */}
            </Link>

            <Link href={"/"} target="_blank" className={styles.gridItem__v}>
              <Image
                src={"https://unsplash.it/600/400"}
                width={600}
                height={400}
                alt={"Unsplash basic"}
              />
              <h3>Galerías Diana</h3>
              {/* <p>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco: su población original, la navegación a vela, los
                galeones de Manila, el comercio inicial con China a través de
                las Filipinas, las expediciones misioneras, los ataques piratas
                y el asedio durante la Guerra de Independencia.
              </p> */}
            </Link>
          </div>
        </section>

        <section className={styles.main}>
          <div className={styles.main__heading}>
            <h1>Sitios de interes!</h1>
            <p>Brody tienes que conocer estos lugares!</p>
          </div>
          <div className={styles.grid}>
            <Link href={"/"} target="_blank" className={styles.gridItem__v}>
              <Image
                src={"https://unsplash.it/600/400"}
                width={600}
                height={400}
                alt={"Unsplash basic"}
              />
              <h3>La Quebrada</h3>
              {/* <p>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco: su población original, la navegación a vela, los
                galeones de Manila, el comercio inicial con China a través de
                las Filipinas, las expediciones misioneras, los ataques piratas
                y el asedio durante la Guerra de Independencia.
              </p> */}
            </Link>

            <Link href={"/"} target="_blank" className={styles.gridItem__h}>
              <Image
                src={"https://unsplash.it/400/600"}
                width={400}
                height={600}
                alt={"Unsplash basic"}
              />
              <h3>Parque Papagayo</h3>
              {/* <p>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco: su población original, la navegación a vela, los
                galeones de Manila, el comercio inicial con China a través de
                las Filipinas, las expediciones misioneras, los ataques piratas
                y el asedio durante la Guerra de Independencia.
              </p> */}
            </Link>

            <Link href={"/"} target="_blank" className={styles.gridItem__v}>
              <Image
                src={"https://unsplash.it/600/400"}
                width={600}
                height={400}
                alt={"Unsplash basic"}
              />
              <h3>Jardín Botánico</h3>
              {/* <p>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco: su población original, la navegación a vela, los
                galeones de Manila, el comercio inicial con China a través de
                las Filipinas, las expediciones misioneras, los ataques piratas
                y el asedio durante la Guerra de Independencia.
              </p> */}
            </Link>
          </div>
        </section>

      </Layout>
    </>
  );
}
