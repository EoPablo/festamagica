import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sobre.module.css';
import EventsComponent from '../../components/swiper/EventsComponent';
import '../../pages/contato/Contato';

const Sobre = () => {
  return (
    <section className={styles.container}>
        <div>
            <h1 className={styles.title}>
                Quem Somos
            </h1>
        </div>

        <article className={styles.article}>
            <p className={styles.text}>
                A Festa Mágica Buffet é uma renomada empresa especializada em eventos, reconhecida por proporcionar experiências memoráveis e personalizadas. O que muitos não sabem é que a Festa Mágica Buffet faz parte do Grupo Magia e Alegria, um conglomerado dedicado a levar diversão, encantamento e excelência em serviços para seus clientes.
            </p>

            <p className={styles.text}> 
                O Grupo Magia e Alegria é conhecido por sua expertise no setor de entretenimento e eventos, atuando com uma estrutura sólida e profissionais altamente capacitados. Ao integrar a Festa Mágica Buffet em seu portfólio, o grupo reforça seu compromisso com a qualidade, oferecendo serviços que vão desde festas infantis temáticas até celebrações corporativas e sociais. Essa conexão estratégica permite que a Festa Mágica Buffet aproveite a tradição e os recursos do grupo para entregar um serviço impecável e inesquecível.
            </p>
            
        </article>

        <EventsComponent />

        <Link to='/contato' className={styles.link}>
            Solicite um orçamento!        
        </Link>

    </section>
  )
}

export default Sobre