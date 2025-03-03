// src/components/ScrollToTop.js

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo da página
  }, [location]);

  return null; // Não precisa renderizar nada
};

export default ScrollToTop;
