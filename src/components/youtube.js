import VideoPlayer from "./youtubeComponent";
import styles from '../styles/youtube.module.css'

export default function Youtube({titulo, texto, video}) {
    
  return (
    <section>
    <div className={styles.divider}></div>
    <div className={styles.container}>
      <div>
        <h2> {titulo}</h2>
        <p className={styles.text}>
          {texto}
        </p>
      </div>
      <VideoPlayer videoId={video}/>

    </div>
    
    </section>
    
  );
  
}
