import Link from "next/link"
import Image from "next/image"
import styles from '../styles/card.module.css'

export default function Card({path, image, width, height, title, subtitle, text, url}) {
  return (
    <Link href={`/${path}/${url}`}>
        <div className={styles.card} aria-label={`Click para ver mas informacion sobre el hotel ${title}`}>
            <Image src={image} width={width} height={height} alt={`Imagen de ${title}`} className={styles.card__image}/>
            <div className={styles.card__info}>
                <div className={styles.card__headings}>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
                <div className={styles.card__text}>
                    <p>{text}</p>
                    <p> Ver mas</p>
                </div>
            </div>
        </div>
    </Link>
  )
}
