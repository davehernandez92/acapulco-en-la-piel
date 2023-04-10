import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/main.module.css'

export default function Main() {
  return (
    <>
      <h1 className={styles.heading}>Hey primo! checa esto! </h1>
      <div className={styles.main__grid}>

        <Link href='hoteles' className={styles.grid__item1}>
            <div className={styles.grid__info}>
              <div>
                <h2>Hoteles para ti</h2>
                <FontAwesomeIcon icon={faArrowRight} className={styles.arrowRight}/>
              </div>
              
              <p className={styles.info__p}>
              ¿Buscas hospedaje? Checa nada más brody estas sugerencias que tenemos para ti.

              </p>
              <p className={styles.info__p}> ¡Hoteles al alcance de todos!</p>
            </div>

        </Link>
        
        <Link href='restaurantes' className={styles.grid__item2}>
          <div className={styles.grid__info}>
            <div>
              <h2>Para comer Primo!</h2>
              <FontAwesomeIcon icon={faArrowRight} className={styles.arrowRight}/>
            </div>

            <p className={styles.info__p}>
              La gastronomía de Acapulco en un solo lugar. 
            </p>
            <p className={styles.info__p}>
              ¡El verdadero sabor de Acapulco, primazo!
            </p>
          </div>
          
        </Link>

        <Link href='servicios' className={styles.grid__item3}>
          <div className={styles.grid__info}>
            <div>
              <h2>Servicios</h2>
              <FontAwesomeIcon icon={faArrowRight} className={styles.arrowRight}/>
            </div>

            <p className={styles.info__p}>
              ¿Buscas un buen fotógrafo, mecánico, dentista o un salón que te permita celebrar ese evento especial??
            </p>
            <p className={styles.info__p}>
              ¡Checa brody todos los servicios que hay en Acapulco!
            </p>
          </div>
          
        </Link>

        <Link href='nuestraGaleria' className={styles.grid__item4}>
          <div className={styles.grid__info}>
            <div>
              <h2>La foto Primo!</h2>
              <FontAwesomeIcon icon={faArrowRight} className={styles.arrowRight}/>
            </div>

            <p className={styles.info__p}>
              Una galería con fotografías del puerto más bello del mundo: 
            </p>
            <p className={styles.info__p}>
             ¡Acapulco!
            </p>
          </div>
          
        </Link>

        <Link href='mercancia' className={styles.grid__item5}>
          <div className={styles.grid__info}>
            <div>
              <h2>Mercancia Oficial</h2>
              <FontAwesomeIcon icon={faArrowRight} className={styles.arrowRight}/>
            </div>

            <p className={styles.info__p}>
             ¡Porque sabemos que quieres llevar a Acapulco en la piel!
            </p>
          </div>
          
        </Link>

        <Link href='visita' className={styles.grid__item6}>
          <div className={styles.grid__info}>
            <div>
              <h2>Para visitar</h2>
              <FontAwesomeIcon icon={faArrowRight} className={styles.arrowRight}/>
            </div>

            <p className={styles.info__p}>
              Checa estos lugares interesantes primo, desde playas hasta museos. 
            </p>
            <p className={styles.info__p}>
              ¡No te los pierdas!
            </p>
          </div>
          
        </Link>
      </div>
      
    </>
  );
}
