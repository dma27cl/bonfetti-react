import { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/img/logobon.png";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div className="header-container">

        <nav className="nav nav-left">
          <a href="#">Inicio</a>
             <a href="productos">Productos</a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <a className="logo" href="#">
          <img src={logo} alt="Bonfetti" />
        </a>

        <nav className="nav nav-right">
          <a href="#empresas">Empresas</a>
          <a href="#contacto">Contacto</a>
        </nav>

      </div>

      {menuOpen && (
        <nav className="mobile-menu">
          <a href="#">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      )}

    </header>
  );
}

export default Header;
