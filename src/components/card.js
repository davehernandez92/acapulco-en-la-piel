import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';

import Link from "next/link"
import Image from "next/image"
import styles from '../styles/card.module.css'

export default function Card({path, image, width, height, title, subtitle, text, url}) {
    const { ref, inView } = useInView({
        threshold: 0.5, // Trigger the animation when the element is 50% in view
        triggerOnce: true // Only trigger the animation once
      });
  return (
    <Link href={`/${path}/${url}`}>
      <motion.div
        className={styles.card}
        aria-label={`Click para ver mas informacion sobre el hotel ${title}`}
        ref={ref}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 20,
          duration: 1.3,
          delay: 0.3,
        }}
      >
        <Image
          src={image}
          width={width}
          height={height}
          alt={`Imagen de ${title}`}
          className={styles.card__image}
        />
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
      </motion.div>
    </Link>
  );
}
