import React from 'react';
import YouTube from 'react-youtube';
import styles from '../styles/youtube.module.css'

class VideoPlayer extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };

    return <YouTube className={styles.iframe} videoId={this.props.videoId} opts={opts} onReady={this._onReady} />;
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default VideoPlayer;
