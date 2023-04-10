import VideoPlayer from "./youtubeComponent";
import styles from '../styles/youtube.module.css'

export default function Youtube() {
    
  return (
    <section>
    <div className={styles.divider}></div>
    <div className={styles.container}>
      <div>
        <h2> Conoce nuestro canal de Youtube</h2>
        <p className={styles.text}>
          ¡Hey! ¿Estás buscando contenido interesante y entretenido en YouTube sobre Acapulco?
          ¡Tenemos justo lo que necesitas! Entra y conoce nuestro canal y
          descubre todo Acapulco en un solo lugar. Desde hoteles, restaurantes,
          playas y los mejores lugares que debes conocer.
        </p>
      </div>
      <VideoPlayer/>

    </div>
    
    </section>
    
  );
  
}