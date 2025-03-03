// src/components/layout/Layout.js

import Header from "../header/Header";
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer'; // Importando o Footer
import WhatsAppButton from '../WhatsApp/WhatsAppButton'; // Importando o botão de WhatsApp
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop /> {/* Rola para o topo da página em todas as mudanças de rota */}
      <Header /> {/* Exibe o cabeçalho em todas as páginas */}
      <main>
        <Outlet /> {/* Renderiza o conteúdo das rotas aqui */}
      </main>
      <Footer /> {/* Exibe o footer em todas as páginas */}
      <WhatsAppButton /> {/* Botão de WhatsApp visível em todas as páginas */}
    </>
  );
};

export default Layout;
