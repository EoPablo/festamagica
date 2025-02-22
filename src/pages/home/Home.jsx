import { Link } from 'react-router-dom';

import styles from './home.module.css';

// Imagens
import Image from '../../imgs/bf01.jpg'
import Image2 from '../../imgs/bf02.jpg'
import Image3 from '../../imgs/bf03.jpg'
import Image4 from '../../imgs/bf06.jpeg'

import React from 'react';

import SwiperComponent from '../../components/Swiper/SwiperComponent';

const Home = () => {
  return (
    <div className={styles.container}>
      <SwiperComponent />

      <section className={styles.section}>
        <div className={styles.section_container}>
          <p className={styles.paragrafo}>O Sabor da Celebração</p>
          <h1 className={styles.title}>Buffet Completo para Eventos Inesquecíveis</h1>
          <p className={styles.text}>
            Torne seu evento especial com um buffet que une sofisticação e sabor. Com um serviço impecável e pratos irresistíveis, criamos experiências memoráveis.
          </p>
        </div>
      </section>

      <section className={styles.seg_section}>
        <div className={styles.img_container}>
          <img src={Image} alt="Imagem 1" />
          <img src={Image2} alt="Imagem 1" />
          <img src={Image3} alt="Imagem 1" />
          <img src={Image4} alt="Imagem 1" />
        </div>
        

        <div className={styles.about}>
          <h1 className={styles.title}>Sabores que Encantam, Momentos que Marcam</h1>
          <p>
          Buffet Completo para Eventos Perfeitos
        </p>

        <Link to='/barracas' className={styles.btn}>
          Nosso Cardápio
        </Link>
      </div>
      </section>
      
    </div>
  )
}

export default Home