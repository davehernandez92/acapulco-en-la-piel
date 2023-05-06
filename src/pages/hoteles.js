
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import Layout from '@/components/layout'

import Link from 'next/link';
import heroCSS from '../styles/hero.module.css'
import styles from '../styles/hoteles.module.css'
// Dynamically import the Card component
const Card = dynamic(() => import('@/components/card'), { ssr: false });

export default function Hoteles({hotels}) {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger the animation when the element is 50% in view
    triggerOnce: true // Only trigger the animation once
  });
 
  return (
    <Layout title={"Hoteles"}>
      <>
        <div>
          <div className={heroCSS.hero}>
            <div className={styles.heading__wrapp}>
              <h1 className={styles.hoteles__heading}>Hoteles</h1>
            </div>
          </div>

          <div className={styles.navegacion}>
            <Link href={"/"}>Inicio </Link>
            <p> {">"} </p>
            <Link href={"#"}>Hoteles </Link>
          </div>

          <motion.div
            ref={ref}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 20,
              duration: 1.3,
              delay:0.3,
            }}
            className={styles.hoteles__subtitle}
          >
            <h2>Checa nuestra lista de Hoteles!</h2>
          </motion.div>
          <div className={styles.card__wrapper}>
            {hotels.map((hotel) => (
              <Card
                key={hotel.id}
                path={"hoteles"}
                image={
                  hotel.attributes.imagenes.data[0].attributes.formats.small.url
                }
                width={
                  hotel.attributes.imagenes.data[0].attributes.formats.small
                    .width
                }
                height={
                  hotel.attributes.imagenes.data[0].attributes.formats.small
                    .height
                }
                title={hotel.attributes.title}
                subtitle={hotel.attributes.subtitle}
                text={hotel.attributes.text}
                url={hotel.attributes.url}
              />
            ))}
          </div>
        </div>
      </>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  
  // const hotels = [
  //   {
  //     id: 1,
  //     image: hotel1,
  //     title: "Hotel Carlisa",
  //     subtitle: "Hotel Economico",
  //     text: " Un hotel con mucha experiencia en el servicio, cómodas instalaciones y habitaciones, muy cerca de la playa hornos y tamarindos y de la costera Miguel Alemán. El Hotel Carlisa, sin duda es una opción muy accesible y al alcance de todos los presupuestos, si buscas una opción confiable, cómoda y atención personalizada de su anfitrión, el Sr. Ernesto, no lo pienses más y reserva con anticipación.",
  //     url: "hotel-carlisa",
  //     maps: "https://goo.gl/maps/UGTWnZ2aBS2kQrQp6",
  //     telefono: "744 181 9196",
  //     face: "https://www.facebook.com/hotelcarlisa",
  //     insta: "",
  //     email: "hotel_carlisa@hotmail.com",
  //     video: "UhgdzL3r1Ek",
  //   },
  //   {
  //     id: 2,
  //     image: hotel2,
  //     title: "Hotel Donde Mira El Sol",
  //     subtitle: "Hotel Pet friendly",
  //     text: " Lejos de cualquier sonido artificial, con una vista increíble hacia el océano pacífico, el Hotel Donde Mira El Sol, es una opción espectacular que te proporciona una conexión directa con la naturaleza. Sin duda es un placer para pocos, ya que es poco conocido en redes sociales y el cupo es limitado. Una playa exclusiva y espectacular y los mejores atardeceres, es lo que te espera en este mágico lugar. ",
  //     url: "donde-mira-el-sol",
  //     maps: "https://goo.gl/maps/SM8bTwCqkE165QJi7",
  //     telefono: "7441 94 12 02",
  //     face: "https://www.facebook.com/dondemiraelsol",
  //     insta: "",
  //     email: "",
  //     video: "WAscT2C_vBk",
  //   },
  //   {
  //     id: 3,
  //     image: hotel3,
  //     title: "Hotel Miramar",
  //     subtitle: "Hotel Economico",
  //     text: " A unos pasos de la Costera Miguel Alemán, muy cerca de la Diana, en plena zona dorada de Acapulco, se encuentra el hotel Miramar. Excelente ubicación, muy cerca de todo, cómodas instalaciones y habitaciones y una alberca familiar, son algunas de las razones que te harán reservar en este pequeño, pero efectivo lugar de descanso y vacaciones. ",
  //     url: "hotel-miramar",
  //     maps: "https://goo.gl/maps/LbUSg7f5wdRtbfHKA",
  //     telefono: "744 166 4295",
  //     face: "https://www.facebook.com/people/Hotel-Miramar/100054317718961/",
  //     insta: "",
  //     email: "",
  //     video: "lXcCu1BJQeA",
  //   },
  //   {
  //     id: 4,
  //     image: hotel4,
  //     title: "Hotel Del Valle",
  //     subtitle: "Hotel Familiar",
  //     text: " Uno de los hoteles familiares más bonitos de Acapulco. A unos pasos de la costera Miguel Alemán, justo al lado del Parque Papagayo, el más importante de todo el estado de Guerrero. Cerca de todo, pues su envidiable ubicación lo colocan como una de las mejores opciones para vacacionar en Acapulco. Plazas comerciales, cines, restaurantes, playas, centros comerciales y toda la zona de antros y bares de la condesa, están a tan solo unos pasos de este increíble lugar que sin duda, será de tus consentidos al momento de visitar al puerto más bello del mundo.",
  //     url: "hotel-del-valle",
  //     maps: "https://goo.gl/maps/a21fjvrgUE87tXeC9",
  //     telefono: "744 485 83 36",
  //     face: "https://www.facebook.com/DelValleHotel",
  //     insta: "",
  //     email: "hotelvalle6204@gmail.com",
  //     video: "YU6FlmCXCfQ",
  //   },
  //   {
  //     id: 5,
  //     image: hotel5,
  //     title: "Hotel La Jungla",
  //     subtitle: "Hotel Economico",
  //     text: "Uno de los hoteles más tradicionales de Acapulco. Ubicado sobre la Av. Costera Miguel Alemán, tiene a sus espaldas, una de las playas que ofrece hermosos atardeceres: playa La Angosta. Cuenta con habitaciones muy cómodas y una amplia experiencia en atención a grupos de visitantes. Sin duda una opción muy efectiva que combina experiencia, confort y descanso.",
  //     url: "hotel-la-jungla",
  //     maps: "https://goo.gl/maps/ScunEYZn6BYTK3gf6",
  //     telefono: "744 482 0255",
  //     face: "https://www.facebook.com/lajunglahotel",
  //     insta: "",
  //     email: "hotellajungla445a@hotmail.com",
  //     video: "https://www.youtube.com/embed/bmNq8B7hN98",
  //   },
  //   {
  //     id: 6,
  //     image: hotel6,
  //     title: "Suites Vicky",
  //     subtitle: "Suites Economico",
  //     text: " Ubicado en el corazón de la zona dorada de Acapulco, Suites Vicky se consolida como una opción realmente accesible, para todo tipo de presupuestos y grupos de personas y visitantes. Años de experiencia en el servicio los respaldan. Su excelente ubicación, teniendo muy cerca restaurantes, plazas, centros comerciales y playas, hacen de este lugar, una opción imperdible para visitar en el puerto más bello del mundo",
  //     url: "suites-vicky",
  //     maps: "https://goo.gl/maps/UKEddTb9wyznuHCz6",
  //     telefono: "744 486 5874",
  //     face: "",
  //     insta: "",
  //     email: "",
  //     video: "GWAzQ0PRQs8",
  //   },
  //   {
  //     id: 7,
  //     image: hotel7,
  //     title: "Hotel Los Reyes",
  //     subtitle: "Hotel Economico",
  //     text: " Un hotel lleno de historia, pues desde la década de los años 50s, ha sido pionero del servicio hotelero y turístico en Acapulco. Artistas y personajes nacionales e internacionales, disfrutaron muchos días de descanso en este agradable hotel, que se ubica sobre la costera Miguel Alemán, a unos pasos de la playa Manzanillo y la playa La Angosta.",
  //     url: "hotel-delos-reyes",
  //     maps: "https://goo.gl/maps/mutqgiiWEfanwqGw6",
  //     telefono: "744 449 0524",
  //     face: "https://www.facebook.com/people/Hotel-De-Los-Reyes-Acapulco/100063568123958/",
  //     insta: "",
  //     email: "hoteldelosreyesacapulco@hotmail.com",
  //     video: "2nGxCWnHHaM",
  //   },
  // ];
 

  const response = await fetch(`${process.env.API_URL}/hoteles?populate=imagenes`)
  const {data} = await response.json()


  return {
      props: {
        hotels:data
      }
    }
  
}
