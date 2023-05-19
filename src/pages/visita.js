/* eslint-disable react/no-unescaped-entities */
import Layout from '@/components/layout'
import Link from 'next/link';
import Image from 'next/image';
import sanDiego from '../../public/sitios/sanDiego.webp'
import galeriasDiana from '../../public/sitios/galeriasD.webp'
import jardinB from '../../public/sitios/jardin.webp'
import isla from '../../public/sitios/isla.webp'
import galeriasAca from '../../public/sitios/galeriasAca.webp'
import lasPalmas from '../../public/sitios/palmas.webp'
import museoMascara from '../../public/sitios/mascara.webp'
import laQuebrada from '../../public/sitios/quebrada.webp'
import museoNaval from '../../public/sitios/naval.webp'
import papagayo from '../../public/sitios/papag.webp'
import sinfonia from '../../public/sitios/sinfo.webp'
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
            <Link
              href={"/"}
              target="_blank"
              className={`${styles.gridItem__h} ${styles.h} `}
            >
              <Image
                src={sanDiego}
                width={600}
                height={400}
                alt={"Fuerte de san Diego"}
              />
              <h3>Fuerte de San Diego</h3>
              <p className={styles.item__description}>
                Una de las fortalezas antiguas mejor restauradas y conservadas
                de México; el museo exhibe parte de la historia del puerto de
                Acapulco.
              </p>
            </Link>

            <Link
              href={"/"}
              target="_blank"
              className={`${styles.gridItem__v} ${styles.v} `}
            >
              <Image
                src={museoNaval}
                width={600}
                height={900}
                alt={"Mueso Historico Naval"}
              />
              <h3>Museo Histórico Naval</h3>
              <p className={styles.item__description}>
                El lugar perfecto para aprender un poco más, sobre historia
                Naval de México y Acapulco. Cuenta con muchas réplicas de navíos
                en escala y sus distintas variedades de equipamientos.
              </p>
            </Link>

            <Link
              href={"/"}
              target="_blank"
              className={`${styles.gridItem__v} ${styles.v2} `}
            >
              <Image
                src={museoMascara}
                width={600}
                height={400}
                alt={"Museo de la mascara guerrero"}
              />
              <h3>Museo de la Máscara Guerrero</h3>
              <p className={styles.item__description}>
                El lugar ideal para apreciar muchas de las máscaras que son
                originarias del Estado de Guerrero, así como de otras partes de
                México. Las máscaras son una elaboración 100% mexicana, desde
                tiempos anteriores a la revolución.
              </p>
            </Link>
          </div>
        </main>
        {/* Plazas */}
        <section className={styles.main}>
          <div className={styles.main__heading}>
            <h1>Plazas</h1>
            <p>
              Ya sea que quieras ir al cine o de compras, siempre habra algo
              nuevo que ver o hacer, checa estas plazas !{" "}
            </p>
          </div>
          <div className={`${styles.grid} ${styles.grid2}`}>
            <Link
              href={"/"}
              target="_blank"
              className={`${styles.gridItem__v} ${styles.v2} `}
            >
              <Image
                src={isla}
                width={600}
                height={900}
                alt={"Centro Comercial La Isla"}
              />
              <h3>Centro Comercial La Isla</h3>
              <p className={styles.item__description}>
                Ubicado también en la zona Diamante de Acapulco, pero muy cerca
                del Aeropuerto, este centro comercial es el más grande de
                Acapulco. cuenta con cine, extensas áreas de paseo, tiendas de
                marca, restaurantes y bares que te harán disfrutar desde el
                amanecer, hasta el anochecer.
              </p>
            </Link>

            <Link
              href={"/"}
              target="_blank"
              className={`${styles.gridItem__v} ${styles.v} `}
            >
              <Image
                src={galeriasDiana}
                width={600}
                height={900}
                alt={"Galerias Diana"}
              />
              <h3>Galerias Diana</h3>
              <p className={styles.item__description}>
                Cerca de la glorieta de La Diana, sobre la Av Costera Miguel
                Alemán, se encuentra este centro comercial, con muchas tiendas
                de marcas internacionales, cines y área de comida, con
                restaurantes exclusivos.
              </p>
            </Link>

            <Link
              href={"/"}
              target="_blank"
              className={`${styles.gridItem__h} ${styles.h2} `}
            >
              <Image
                src={galeriasAca}
                width={600}
                height={900}
                alt={"Galerias Acapulco"}
              />
              <h3>Galerias Acapulco</h3>
              <p className={styles.item__description}>
                Antes conocido como "La Gran Plaza", es uno de los centros
                comerciales más grandes de Acapulco y en su interior, puedes
                encontrar distintos locales de interés, cines, área de comida,
                el centro recreativo "Recórcholis" y muchas cosas más.
              </p>
            </Link>

            <Link
              href={"/"}
              target="_blank"
              className={`${styles.gridItem__h} ${styles.h} `}
            >
              <Image
                src={lasPalmas}
                width={600}
                height={900}
                alt={"Multiplaza las palmas"}
              />
              <h3>Multiplaza las Palmas</h3>
              <p className={styles.item__description}>
                Ubicada en la zona Diamante de Acapulco, cuenta con muchos
                locales de interés, así como cines , food court y tiendas de
                autoservicio.
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
            <Link
              href={"/"}
              target="_blank"
              className={`${styles.gridItem__h} ${styles.h} `}
            >
              <Image
                src={laQuebrada}
                width={600}
                height={400}
                alt={"La quebrada"}
              />
              <h3>La Quebrada</h3>
              <p className={styles.item__description}>
                El lugar tradicional por excelencia, del puerto de Acapulco.
                Diariamente los clavadistas de La Quebrada, realizan actos
                increíbles que, en algunos momentos, ponen en peligro la vida de
                quienes los llevan a cabo, ya que no importa si es un día
                soleado, hay mar de fondo o llueve, ellos siempre dan un
                espectáculo arriesgado, pero muy bien reconocido a nivel
                mundial.
              </p>
            </Link>

            <Link
              href={"/"}
              target="_blank"
              className={`${styles.gridItem__v} ${styles.v} `}
            >
              <Image
                src={papagayo}
                width={600}
                height={900}
                alt={"Parque Papagayo"}
              />
              <h3>Parque Papagayo</h3>
              <p className={styles.item__description}>
                Actualmente remodelado, es el parque más importante del Estado
                de Guerrero, cuenta con áreas de comida, juegos para niños y
                muchas áreas verdes.
              </p>
            </Link>

            <Link
              href={"/"}
              target="_blank"
              className={`${styles.gridItem__h} ${styles.h2} `}
            >
              <Image
                src={sinfonia}
                width={600}
                height={400}
                alt={"Sinfonia del Mar"}
              />
              <h3>Sinfonia del Mar</h3>
              <p className={styles.item__description}>
                Una ventana natural hacia el imponente e inmenso Océano
                Pacífico, el lugar perfecto para presenciar unos atardeceres
                increíbles.
              </p>
            </Link>

            <Link
              href={"/"}
              target="_blank"
              className={`${styles.gridItem__v} ${styles.v2} `}
            >
              <Image
                src={jardinB}
                width={600}
                height={900}
                alt={"Jardin Botanico"}
              />
              <h3>Jardin Botanico de Acapulco</h3>
              <p className={styles.item__description}>
                En lo alto del cerro de Cumbres de Llano Largo, atrás de la
                reconocida Universidad Loyola, se encuentra el Jardín Botánico
                de Acapulco. cientos de variedades y especies de plantas pueden
                admirarse aquí, así como unas carpas Koi en sus estanques, y
                pláticas de interés respecto a temas de biología y naturaleza,
                en su auditorio.
              </p>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}
