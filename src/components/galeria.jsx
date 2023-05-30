import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/galeria.module.css";

export default function GaleriaComponent({ images, hotel }) {


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
        <motion.div
          key={index}
          className={styles.image_container}
          initial={{ opacity: 0, y:-20 }}
          animate={{ opacity: 1, y:0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20,
            delay: 0.5,
          }}
        >
          <Image
            src={image.attributes.formats.large.url}
            alt={`Imagen de: ${hotel}`}
            width={image.attributes.formats.large.width}
            height={image.attributes.formats.large.height}
            onClick={() => expandImage(index)
            }

          />
        </motion.div>
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
                className={styles.expandImage}
                
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


