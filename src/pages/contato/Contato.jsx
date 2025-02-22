import { useState } from "react";
import styles from './Contato.module.css';
import emailjs from '@emailjs/browser';

const Contato = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [modalMessage, setModalMessage] = useState(''); // Estado para armazenar a mensagem
  const [isModalOpen, setIsModalOpen] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      setModalMessage("⚠️ Preencha todos os campos!");
      setIsModalOpen(true);
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send("service_i3mpim9", "template_ve7k3gp", templateParams, "uKHFlWANI_g0u7OSU")
      .then((response) => {
        console.log("EMAIL ENVIADO!", response.status, response.text);
        setModalMessage("✅ E-mail enviado com sucesso!");
        setIsModalOpen(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.log("ERRO AO ENVIAR EMAIL...", err);
        setModalMessage("❌ Erro ao enviar e-mail. Tente novamente.");
        setIsModalOpen(true);
      });
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Con<span>tato</span></h1>

      <form className={styles.form} onSubmit={sendEmail}>
        <input
          className={styles.input}
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className={styles.input}
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className={styles.textarea}
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className={styles.button} type="submit" value="Enviar" />
      </form>

      {/* Modal personalizado */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <p className={styles.modalMessage}>{modalMessage}</p>
            <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contato;
