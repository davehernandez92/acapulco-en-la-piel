import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import instagramLogo from "../../public/instagram1.png"
import youtubeLogo from "../../public/youtube.png"
import facebookLogo from "../../public/facebook.png"
import logo from "../../public/Acapulco-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/navbar.module.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Link href="/">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </Link>
      </div>
      <div className={styles.menu__icon} onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={faBars}
          className={`icon ${isMenuOpen ? "hidden" : "visible"}`}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className={`icon ${isMenuOpen ? "visible" : "hidden"}`}
        />
      </div>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link className={styles.menu__txt} href="/">Inicio</Link>
        </li>
        <li>
          <Link className={styles.menu__txt} href="/hoteles">Hoteles</Link>
        </li>
        <li>
          <Link className={styles.menu__txt} href="/restaurantes">Restaurantes</Link>
        </li>
        <li>
          <Link className={styles.menu__txt} href="/visita">Para Visitar</Link>
        </li>
        <li>
          <Link className={styles.menu__txt} href="/servicios">Servicios</Link>
        </li>
        <li>
          <Link className={styles.menu__txt} href="/mercancia">Mercancia Oficial</Link>
        </li>
        <li>
          <Link className={styles.menu__txt} href="/contacto">Contacto</Link>
        </li>
        <div className={styles.icons__div}>
          <Link href={"https://www.instagram.com/acapulcoenlapiel/"}>
          <Image src={instagramLogo} alt="Logo" width={32} height={32} />

          </Link>
          <Link href={"https://www.youtube.com/@acapulcoenlapiel"}>
          <Image src={youtubeLogo} alt="Logo" width={32} height={32} />

          </Link>
          <Link href={"https://www.facebook.com/AcapulcoEnLaPiel/?locale=es_LA"}>
            <Image src={facebookLogo} alt="Logo" width={32} height={32} />
          </Link>
        </div>
      </ul>
    </nav>
  );
}
