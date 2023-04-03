import Link from "next/link"
import Image from "next/image";
import facebook from "../../public/facebook-.svg"
import youtube from "../../public/youtube-.svg"
import instagram from "../../public/instagram-.svg"
import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.footer__socials}>
        <h1 className={styles.footer__title}>
          Siguenos en redes sociales!
        </h1>
        <div className={styles.footer__list}>
          <div className={styles.social__container}>
            <div>
              <Image
                  src={youtube}
                  alt={"youtube icon"}
                  className={styles.socialsIcon}
                />
            </div>
            <Link href={"https://www.youtube.com/@acapulcoenlapiel"}>
              
              Youtube
            </Link>
          </div>
          
          <div className={styles.social__container}>
            <div>
              <Image
                src={facebook}
                alt={"facebook icon"}
                className={styles.socialsIcon}
              />
            </div>
            <Link
              href={"https://www.facebook.com/AcapulcoEnLaPiel/?locale=es_LA"}>
              
              Facebook
            </Link>
          </div>

          <div className={styles.social__container}>
            <div>
              <Image
                src={instagram}
                alt={"instagram icon"}
                className={styles.socialsIcon}
              />
            </div>
            <Link href={"https://www.instagram.com/acapulcoenlapiel/"}>
            
              Instagram
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
