import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Imagens
import image1 from "../../imgs/bf01.jpg";
import image2 from "../../imgs/bf02.jpg";
import image3 from "../../imgs/bf03.jpg";
import image4 from "../../imgs/bf04.jpg";
import image5 from "../../imgs/bf05.jpeg";
import image6 from "../../imgs/bf06.jpeg";
import image7 from "../../imgs/bf07.jpeg";
import image8 from "../../imgs/bf08.jpeg";
import image9 from "../../imgs/hamb1.jpeg";
import image10 from "../../imgs/hamb2.jpeg";

// CSS Modules
import styles from "./EventsComponent.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperComponent = () => {
  const slides = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
    { id: 8, image: image8 },
    { id: 9, image: image9 },
    { id: 10, image: image10 },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      // pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 3000 }} // Ajuste do delay para autoplay
      slidesPerView={3}
      spaceBetween={20}
      className={styles.swiperContainer}
      breakpoints={{
        // Para telas grandes
        2560: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        // Para telas entre 1024px e 2560px
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        // Para telas médias
        768: {
          slidesPerView: 3, // 2 imagens por vez
          spaceBetween: 10, // Ajuste o espaço entre as imagens
        },

        // Para telas pequenas
        480: {
          slidesPerView: 2, 
          spaceBetween: 10, 
        },
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className={styles.swiperSlide}>
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className={styles.swiperSlideImg}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
