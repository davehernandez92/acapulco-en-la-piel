import Layout from '@/components/layout'
import GaleriaComponent from '@/components/galeria.jsx'
import EmailButton from '@/components/emailButton'
import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"
import styles from '../../styles/hotel.module.css'
import hotel1 from "../../../public/Hoteles/Hotel Carlisa/3.webp"
import hotel2 from "../../../public/Hoteles/Donde mira el Sol/1.webp"
import hotel3 from "../../../public/Hoteles/Hotel Miramar/1.webp"
import hotel4 from "../../../public/Hoteles/Hotel del Valle/1.webp"
import hotel5 from "../../../public/Hoteles/La jungla/1.webp"
import hotel6 from "../../../public/Hoteles/Suites Vicky/1.webp"
import hotel7 from "../../../public/Hoteles/los reyes/1.webp"
import mapsIcon from '../../../public/google-maps.png'
import facebook from '../../../public/facebook.png'
import instagram from '../../../public/instagram1.png'
import telefono from '../../../public/telephone.png'
import website  from '../../../public/internet.png'


export default function Hotel({hotel}) {
  

    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>
      }
    
    

  return (
    <Layout>
      <>
        <div>
          <div className={styles.navegacion}>
            <Link className={styles.link} href={"/"}>
              Inicio{" "}
            </Link>
            <p> {">"} </p>
            <Link className={styles.link} href={"/hoteles"}>
              Hoteles{" "}
            </Link>
            <p> {">"} </p>
            <Link className={styles.link} href={"#"}>
              {hotel.title}
            </Link>
          </div>

          <h1 className={styles.title}>{hotel.title}</h1>
          <h2 className={styles.subtitle}>{hotel.subtitle}</h2>

          <div className={styles.slide}>
            <Image
              src={hotel.image}
              alt={`Imagen de ${hotel.title}`}
              className={styles.image__slide}
            />
          </div>
        </div>

        <div className={styles.descripcion}>
          <h3> Descripcion </h3>
          <p>{hotel.text}</p>
        </div>
        <div className={styles.datos}>
          <div className={styles.datos__direccion}>
            <h4>Direccion:</h4>
            <Link className={styles.link} href={hotel.maps} target="_blank">
              <p>{hotel.direccion}</p>
              <Image
                className={styles.mapsIcon}
                src={mapsIcon}
                alt={"Google maps Icono"}
              />
            </Link>
          </div>
          <div className={styles.datos__contacto}>
            <h4>Contacto: </h4>
            <Link
              className={styles.contacto__telLink}
              href={`tel:${hotel.telefono}`}
            >
              Telefono: {hotel.telefono}
              <Image
                className={styles.contacto__telIcono}
                src={telefono}
                alt={"Telefono Icono"}
              />
            </Link>
            <p>Conecta con {hotel.title}: </p>

            <div className={styles.datos__iconos}>
              <Link href={hotel.face}>
                <Image
                  className={styles.social}
                  src={facebook}
                  alt={"Facebook Icono"}
                />
              </Link>
              <Link href={hotel.insta}>
                <Image
                  className={styles.social}
                  src={instagram}
                  alt={"Instagram Icono"}
                />
              </Link>
              <Link
                className={styles.website__icon}
                href={`${hotel.website}`}
              >
                {" "}
                <Image src={website} alt={"Sitio web Icono"} width={25} />{" "}
              </Link>
              <EmailButton email={hotel.email} />
            </div>
          </div>

        </div>
        <div className={styles.galeria}>
          <h1 className={styles.galeria__title}>Galeria</h1>

          <GaleriaComponent
            images={hotel.imagenes}
          />

        </div>


      </>
    </Layout>
  );
    
}

export async function getServerSideProps(context) {
  const { params } = context;
  const hotels = [
    {
      id: 1,
      image: hotel1,
      title: "Hotel Carlisa",
      subtitle: "Hotel Economico",
      text: " Un hotel con mucha experiencia en el servicio, cómodas instalaciones y habitaciones, muy cerca de la playa hornos y tamarindos y de la costera Miguel Alemán. El Hotel Carlisa, sin duda es una opción muy accesible y al alcance de todos los presupuestos, si buscas una opción confiable, cómoda y atención personalizada de su anfitrión, el Sr. Ernesto, no lo pienses más y reserva con anticipación.",
      url: "hotel-carlisa",
      maps: "https://goo.gl/maps/UGTWnZ2aBS2kQrQp6",
      direccion:'Miguel López de Legazpi, Hornos, 39350 Acapulco de Juárez, Gro., Mexico',
      telefono: "744 181 9196",
      face: "https://www.facebook.com/hotelcarlisa",
      insta: "",
      email: "hotel_carlisa@hotmail.com",
      video: "https://www.youtube.com/embed/UhgdzL3r1Ek",
      imagenes: [ 
        {src:'/Hoteles/Hotel Carlisa/1.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/Hotel Carlisa/2.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/Hotel Carlisa/3.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/Hotel Carlisa/4.webp', alt: 'Imagen del la galeria'}
      ]
    },
    {
      id: 2,
      image: hotel2,
      title: "Hotel Donde Mira El Sol",
      subtitle: "Hotel Pet friendly",
      text: " Lejos de cualquier sonido artificial, con una vista increíble hacia el océano pacífico, el Hotel Donde Mira El Sol, es una opción espectacular que te proporciona una conexión directa con la naturaleza. Sin duda es un placer para pocos, ya que es poco conocido en redes sociales y el cupo es limitado. Una playa exclusiva y espectacular y los mejores atardeceres, es lo que te espera en este mágico lugar. ",
      url: "donde-mira-el-sol",
      maps: "https://goo.gl/maps/SM8bTwCqkE165QJi7",
      direccion:'De Las Ardillas 123, Balcones al Mar, 39430 Acapulco de Juárez, Gro., Mexico',
      telefono: "7441 94 12 02",
      face: "https://www.facebook.com/dondemiraelsol",
      insta: "",
      email: "",
      video: "https://www.youtube.com/embed/WAscT2C_vBk",
      imagenes: [ 
        {src:'/Hoteles/Donde mira el Sol/1.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/Donde mira el Sol/2.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/Donde mira el Sol/3.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/Donde mira el Sol/4.webp', alt: 'Imagen del la galeria'}
      ]
    },
    {
      id: 3,
      image: hotel3,
      title: "Hotel Miramar",
      subtitle: "Hotel Economico",
      text: " A unos pasos de la Costera Miguel Alemán, muy cerca de la Diana, en plena zona dorada de Acapulco, se encuentra el hotel Miramar. Excelente ubicación, muy cerca de todo, cómodas instalaciones y habitaciones y una alberca familiar, son algunas de las razones que te harán reservar en este pequeño, pero efectivo lugar de descanso y vacaciones. ",
      url: "hotel-miramar",
      maps: "https://goo.gl/maps/LbUSg7f5wdRtbfHKA",
      direccion:'Martin Alonso Pinzon # 18 Fracc. Magallanes 39670 Acapulco, Guerrero, Mexico',
      telefono: "744 166 4295",
      face: "https://www.facebook.com/people/Hotel-Miramar/100054317718961/",
      insta: "",
      email: "",
      video: "https://www.youtube.com/embed/lXcCu1BJQeA",
      imagenes: [ 
        {src:'/Hoteles/Hotel Miramar/1.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/Hotel Miramar/2.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/Hotel Miramar/3.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/Hotel Miramar/4.webp', alt: 'Imagen del la galeria'}
      ]
    },
    {
      id: 4,
      image: hotel4,
      title: "Hotel Del Valle",
      subtitle: "Hotel Familiar",
      text: " Uno de los hoteles familiares más bonitos de Acapulco. A unos pasos de la costera Miguel Alemán, justo al lado del Parque Papagayo, el más importante de todo el estado de Guerrero. Cerca de todo, pues su envidiable ubicación lo colocan como una de las mejores opciones para vacacionar en Acapulco. Plazas comerciales, cines, restaurantes, playas, centros comerciales y toda la zona de antros y bares de la condesa, están a tan solo unos pasos de este increíble lugar que sin duda, será de tus consentidos al momento de visitar al puerto más bello del mundo.",
      url: "hotel-del-valle",
      maps: "https://goo.gl/maps/a21fjvrgUE87tXeC9",
      direccion: 'Manuel Gómez Morín 150, Fracc Magallanes, Magallanes, 39670 Acapulco de Juárez, Gro., Mexico',
      telefono: "744 485 83 36",
      face: "https://www.facebook.com/DelValleHotel",
      insta: "",
      email: "hotelvalle6204@gmail.com",
      video: "https://www.youtube.com/embed/YU6FlmCXCfQ",
      imagenes: [ 
        {src:'/Hoteles/Hotel del Valle/1.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/Hotel del Valle/2.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/Hotel del Valle/3.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/Hotel del Valle/4.webp', alt: 'Imagen del la galeria'}
      ]
    },
    {
      id: 5,
      image: hotel5,
      title: "Hotel La Jungla",
      subtitle: "Hotel Economico",
      text: "Uno de los hoteles más tradicionales de Acapulco. Ubicado sobre la Av. Costera Miguel Alemán, tiene a sus espaldas, una de las playas que ofrece hermosos atardeceres: playa La Angosta. Cuenta con habitaciones muy cómodas y una amplia experiencia en atención a grupos de visitantes. Sin duda una opción muy efectiva que combina experiencia, confort y descanso.",
      url: "hotel-la-jungla",
      maps: "https://goo.gl/maps/ScunEYZn6BYTK3gf6",
      direccion:'Av Costera Miguel Alemán 445, La Pinzona, Las Playas, 39390 Acapulco de Juárez, Gro., Mexico',
      telefono: "744 482 0255",
      face: "https://www.facebook.com/lajunglahotel",
      insta: "",
      email: "hotellajungla445a@hotmail.com",
      video: "https://www.youtube.com/embed/bmNq8B7hN98",
      imagenes: [ 
        {src:'/Hoteles/La jungla/1.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/La jungla/2.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/La jungla/3.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/La jungla/4.webp', alt: 'Imagen del la galeria'}
      ]
    },
    {
      id: 6,
      image: hotel6,
      title: "Suites Vicky",
      subtitle: "Suites Economico",
      text: " Ubicado en el corazón de la zona dorada de Acapulco, Suites Vicky se consolida como una opción realmente accesible, para todo tipo de presupuestos y grupos de personas y visitantes. Años de experiencia en el servicio los respaldan. Su excelente ubicación, teniendo muy cerca restaurantes, plazas, centros comerciales y playas, hacen de este lugar, una opción imperdible para visitar en el puerto más bello del mundo",
      url: "suites-vicky",
      maps: "https://goo.gl/maps/UKEddTb9wyznuHCz6",
      direccion:'C. Cristobal Colon 33, Fracc Magallanes, Magallanes, 39670 Acapulco de Juárez, Gro., Mexico',
      telefono: "744 486 5874",
      face: "",
      insta: "",
      email: "",
      video: "https://www.youtube.com/embed/GWAzQ0PRQs8",
      imagenes: [ 
        {src:'/Hoteles/Suites Vicky/1.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/Suites Vicky/2.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/Suites Vicky/3.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/Suites Vicky/4.webp', alt: 'Imagen del la galeria'}
      ]
    },
    {
      id: 7,
      image: hotel7,
      title: "Hotel Los Reyes",
      subtitle: "Hotel Economico",
      text: " Un hotel lleno de historia, pues desde la década de los años 50s, ha sido pionero del servicio hotelero y turístico en Acapulco. Artistas y personajes nacionales e internacionales, disfrutaron muchos días de descanso en este agradable hotel, que se ubica sobre la costera Miguel Alemán, a unos pasos de la playa Manzanillo y la playa La Angosta.",
      url: "hotel-delos-reyes",
      maps: "https://goo.gl/maps/mutqgiiWEfanwqGw6",
      direccion:'Av Costera Miguel Alemán 217, La Pinzona, Las Playas, 39390 Acapulco de Juárez, Gro., Mexico',
      telefono: "744 449 0524",
      face: "https://www.facebook.com/people/Hotel-De-Los-Reyes-Acapulco/100063568123958/",
      insta: "",
      email: "hoteldelosreyesacapulco@hotmail.com",
      video: "https://www.youtube.com/embed/2nGxCWnHHaM",
      imagenes: [ 
        {src:'/Hoteles/los reyes/1.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/los reyes/2.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/los reyes/3.webp', alt: 'Imagen del la galeria'},
        {src:'/Hoteles/los reyes/4.webp', alt: 'Imagen del la galeria'}
      ]
    },
  ];

  const hotel = hotels.find((hotel) => hotel.url === params.url);




  return {
    props: {
      hotel
    },
  };
}

