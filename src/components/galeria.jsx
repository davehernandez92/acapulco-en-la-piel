import { useState } from "react";
import Image from "next/image";

import styles from "../styles/galeria.module.css";

export default function GaleriaComponent({ images }) {
  
  const [expandedImageIndex, setExpandedImageIndex] = useState(null);

  const expandImage = (index) => {
    setExpandedImageIndex(index);
  };

  const closeExpandedImage = () => {
    setExpandedImageIndex(null);
  };

  const nextImage = () => {
    if (expandedImageIndex !== null && expandedImageIndex < images.length - 1) {
      setExpandedImageIndex(expandedImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (expandedImageIndex !== null && expandedImageIndex > 0) {
      setExpandedImageIndex(expandedImageIndex - 1);
    }
  };

  return (
    <div className={styles.image_gallery}>
      {images.map((image, index) => (
        <div key={index} className={styles.image_container}>
          <Image
            src={image.src.medium}
            alt={image.alt}
            width={image.width}
            height={image.height}
            onClick={() => expandImage(index)}
          />
        </div>
      ))}

      {expandedImageIndex !== null && (
        <div className={styles.expanded_image_overlay}>
          <div className={styles.expanded_image_container}>
            

            <div className={styles.expanded_image}>
              <button className={styles.close_button} onClick={closeExpandedImage}>
                X
              </button>
              <Image
                src={images[expandedImageIndex].src.large}
                alt={images[expandedImageIndex].alt}
                width={images[expandedImageIndex].width}
                height={images[expandedImageIndex].height}
              />
            </div>

            {expandedImageIndex > 0 && (
              <button className={styles.prev_button} onClick={prevImage}>
                &#8249;
              </button>
            )}

            {expandedImageIndex < images.length - 1 && (
              <button className={styles.next_button} onClick={nextImage}>
                &#8250;
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
