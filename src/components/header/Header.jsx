import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from 'react';

// Logo
import Logo from '../../assets/fm-black.png';
import Logo2 from '../../assets/fm-gold.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [logo, setLogo] = useState(Logo);

    const handleMouseEnter = () => setLogo(Logo2);
    const handleMouseLeave = () => setLogo(Logo);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <header className={styles.header}>
            <Link to='/'>
                <div className={styles.logoContainer}>
                    <img 
                        src={Logo} 
                        alt="Logo Festa Mágica" 
                        className={`${styles.logo} ${styles.logoDefault}`}
                    />
                    <img 
                        src={Logo2} 
                        alt="Logo Festa Mágica" 
                        className={`${styles.logo} ${styles.logoHover}`}
                    />
                </div>
            </Link>

            {/* Botão de menu para dispositivos móveis */}
            <button 
                className={styles.toggleButton} 
                onClick={toggleMenu} 
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
                {menuOpen ? <IoClose size={40} /> : <IoMenu size={40} />}
            </button>

            {/* Menu de navegação */}
            <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
                <Link to='/' className={styles.menu_nav}>
                    Home
                </Link>
                <Link to='/sobre' className={styles.menu_nav}>
                    Sobre
                </Link>
                <Link to='/barracas' className={styles.menu_nav}>
                    Barraquinhas
                </Link>
                <Link to='/contato' className={styles.menu_nav}>
                    Contato
                </Link>
            </nav>
        </header>
    );
};

export default Header;
