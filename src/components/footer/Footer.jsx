import React from "react";
import styles from "./Footer.module.css";

import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        {/* Redes sociais */}
        <div className={styles.social_media}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/festamagicaeventos/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        {/* Linha vertical divisória */}
        <div className={styles.divider}></div>

        {/* Copyright */}
        <p className={styles.copyright}>Festa Mágica | Todos os direitos reservados. © 2025 </p>
      </div>
    </footer>
  );
};

export default Footer;
