import { useState } from "react";
import Image from "next/image";
import next from '../../public/next.png'
import previous from '../../public/back.png'
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
            src={image.attributes.formats.large.url}
            alt={image.attributes.alternativeText}
            width={image.attributes.formats.large.width}
            height={image.attributes.formats.large.height}
            onClick={() => expandImage(index)}
          />
        </div>
      ))}

      {expandedImageIndex !== null && (
        <div className={styles.expanded_image_overlay}>
          <div className={styles.expanded_image_container}>
            <div className={styles.expanded_image}>
              <button
                className={styles.close_button}
                onClick={closeExpandedImage}
              >
                X
              </button>
              <Image
                src={images[expandedImageIndex].attributes.formats.large.url}
                alt={images[expandedImageIndex].attributes.alternativeText}
                width={
                  images[expandedImageIndex].attributes.formats.large.width
                }
                height={
                  images[expandedImageIndex].attributes.formats.large.height
                }
              />

              {expandedImageIndex > 0 && (
                <button className={styles.prev_button} onClick={prevImage}>
                  <h1> {"<"} </h1>
                </button>
              )}

              {expandedImageIndex < images.length - 1 && (
                <button className={styles.next_button} onClick={nextImage}>
                  <h1> {">"} </h1>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


