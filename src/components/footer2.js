import Link from "next/link"
import Image from "next/image";
import facebook from "../../public/facebook-.svg"
import youtube from "../../public/youtube-.svg"
import instagram from "../../public/instagram-.svg"
import logo from '../../public/Acapulco-logo.png'


const styles = {
    footer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#f1f1f1',
      borderTop: '1px solid #ccc',
    },
    logo: {
      width: '100px',
      height: '100px',
      margin: '0 20px 0 0',
    },
    nav: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    navLink: {
      margin: '0 10px',
      fontWeight: 'bold',
      color: '#333',
      textDecoration: 'none',
    },
    social: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    socialLink: {
      margin: '0 10px',
    },
  };
export default function Footer2() {
    return (
        <footer style={styles.footer}>
          <div style={styles.logo}>
            <Image src={logo} alt="Logo" width={30} height={30}/>
          </div>
          <nav style={styles.nav}>
            <Link legacyBehavior href="/">
              <a style={styles.navLink}>Inicio</a>
            </Link>
            <Link legacyBehavior href="/hoteles">
              <a style={styles.navLink}>Hoteles</a>
            </Link>
            <Link legacyBehavior href="/restaurantes">
              <a style={styles.navLink}>Restaurantes</a>
            </Link>
            <Link legacyBehavior href="/visita">
              <a style={styles.navLink}>Visita</a>
            </Link>
            <Link legacyBehavior href="/servicios">
              <a style={styles.navLink}>Servicios</a>
            </Link>
            <Link legacyBehavior href="/mercancia">
              <a style={styles.navLink}>Mercancia</a>
            </Link>
          </nav>
          <hr style={{ width: '100%' }} />
          <div style={styles.social}>
            <p style={{ margin: '0 10px' }}>Siguenos en redes sociales!</p>
            <Link legacyBehavior href="https://www.youtube.com/">
              <a style={styles.socialLink}>
                <Image src={youtube} alt="YouTube" />
              </a>
            </Link>
            <Link legacyBehavior href="https://www.facebook.com/">
              <a style={styles.socialLink}>
                <Image src={facebook} alt="Facebook" />
              </a>
            </Link>
            <Link legacyBehavior href="https://www.instagram.com/">
              <a style={styles.socialLink}>
                <Image src={instagram} alt="Instagram" />
              </a>
            </Link>
          </div>
        </footer>
      );
    };
