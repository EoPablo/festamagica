import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        {/* Redes sociais */}
        <div className={styles.social_media}>
          <a href="https://www.instagram.com/festamagicaeventos/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        {/* Linha vertical divisória */}
        <div className={styles.divider}></div>

        {/* Copyright */}
        <p className={styles.copyright}>© 2025  
          <Link to="/" className={styles.link}>
             Festa Mágica Eventos.
          </Link> 
          Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
