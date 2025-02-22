// src/components/WhatsAppButton.js

import React from 'react';
import './WhatsAppButton.css'; // Estilos para o botão de WhatsApp

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511939554848" // Número de telefone do WhatsApp (alterar com o seu número)
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;
