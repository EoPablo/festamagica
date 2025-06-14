import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Imagens
import image1 from "../../imgs/pessoalcp.jpg";
import image2 from "../../imgs/capa02.jpg";
import image3 from "../../imgs/barracascp.jpg";
import image4 from "../../imgs/capa06.jpeg";
import image5 from "../../imgs/pessoalcp02.jpg";

// CSS Modules
import styles from "./SwiperComponent.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperComponent = () => {
  const slides = [
    { image: image1},
    { image: image2},
    { image: image3},
    { image: image4},
    { image: image5},
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 3000 }}  // Ajuste do delay para autoplay
      className={styles.swiperContainer}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className={styles.swiperSlide}>
          <img 
            src={slide.image} 
            alt={`Imagem do slide ${index + 1}: ${slide.text}`} 
            className={styles.swiperSlideImg} 
          />
          <div className={styles.textOverlay}>
            <h2>{slide.text}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
