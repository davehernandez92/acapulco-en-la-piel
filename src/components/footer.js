import Link from "next/link"
import Image from "next/image";
import logo from '../../public/Acapulco-logo.png'
import facebook from "../../public/facebook-.svg"
import youtube from "../../public/youtube-.svg"
import instagram from "../../public/instagram-.svg"
import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src={logo}
        width={180}
        height={180}
        className={styles.logo}
        alt="Acapulco en la piel Logo"
        priority
      />
      <div className={styles.footer__menu}>
        <nav className={styles.footer__nav}>
          <Link href="/">Inicio</Link>
          <Link href="/hoteles">Hoteles</Link>
          <Link href="/restaurantes">Restaurantes</Link>
          <Link href="/visita">Visita</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/mercancia">Mercancia</Link>
        </nav>
        <hr className={styles.divider} />

        <div className={styles.footer__socials}>
          <h1 className={styles.footer__title}>Nuestras redes!</h1>
          <div className={styles.footer__list}>
            <Link href={"https://www.youtube.com/@acapulcoenlapiel"}>
              <Image
                src={youtube}
                alt={"youtube icon"}
                className={styles.socialsIcon}
              />
            </Link>

            <Link
              href={"https://www.facebook.com/AcapulcoEnLaPiel/?locale=es_LA"}
            >
              <Image
                src={facebook}
                alt={"facebook icon"}
                className={styles.socialsIcon}
              />
            </Link>

            <Link href={"https://www.instagram.com/acapulcoenlapiel/"}>
              <Image
                src={instagram}
                alt={"instagram icon"}
                className={styles.socialsIcon}
              />
            </Link>
            
          </div>
        </div>
      </div>

      <div className={styles.davedev}>
        <Link href="https://davedev.ca/" className={styles.link}>
          {" "}
          Website by Davedev
        </Link>
        <p className={styles.copy}>
          All rights reserved {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
