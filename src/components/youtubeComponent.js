import React from 'react';
import  { lazy, Suspense } from 'react';
import styles from '../styles/youtube.module.css'



const YouTube = lazy(() => import('react-youtube'));

function VideoPlayer(props) {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <YouTube className={styles.iframe} videoId={props.videoId} opts={opts} />
    </Suspense>
  );
}

export default VideoPlayer;
