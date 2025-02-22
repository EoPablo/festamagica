import React, { useState } from 'react';
import styles from './Faq.module.css';

const Faq = () => {
  const perguntasRespostas = [
    {
      pergunta: 'O que está incluído no cardápio?',
      resposta: 'Nosso cardápio inclui Mini Hot-Dog, Mini Pizza, Crepe Suíço, Mini X-Búrguer e muito mais!',
    },
    {
      pergunta: 'Como faço para fazer um pedido?',
      resposta: 'É super fácil! É só clicar no botão do WhatsApp para falar com a gente ou mandar um e-mail, na aba "Contato".',
    },
  ];

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>Perguntas Frequentes</h2>
      <div className={styles.faqList}>
        {perguntasRespostas.map((item, index) => (
          <FaqItem
            key={index}
            pergunta={item.pergunta}
            resposta={item.resposta}
          />
        ))}
      </div>
    </div>
  );
};

// Componente de cada item do FAQ
const FaqItem = ({ pergunta, resposta }) => {
  const [aberto, setAberto] = useState(false);

  return (
    <div className={styles.faqItem}>
      <div
        className={styles.faqPergunta}
        onClick={() => setAberto(!aberto)} // Alterna entre aberto/fechado
      >
        {pergunta}
        <span className={styles.faqIcone}>{aberto ? '-' : '+'}</span>
      </div>
      {aberto && <div className={styles.faqResposta}>{resposta}</div>}
    </div>
  );
};

export default Faq;
