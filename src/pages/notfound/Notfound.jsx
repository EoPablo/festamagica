// src/pages/notfound/Notfound.js

import { Link } from 'react-router-dom';
import Error from "../../imgs/Hands.png";

// Importando os estilos
import styles from './Notfound.module.css';

const Notfound = () => {
  return (
    <div className={styles.notfoundContainer}>
        <img src={Error} alt="Página de Erro" className={styles.notfoundImage} />
        <h1 className={styles.notfoundText}>Opss... Parece que essa página não existe!</h1>
        <Link to="/" className={styles.notfoundLink}>
            Voltar para Home
        </Link>
    </div>
  )
}

export default Notfound;
