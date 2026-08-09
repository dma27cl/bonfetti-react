import "../styles/Header.css";
import logo from "../assets/img/logobon.png";


function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <nav className="nav nav-left">
                    <a href="#">Inicio</a>
                     <a href="#productos">Productos</a>
                </nav>
               
                <a className="logo" href="#">
                    <img src={logo} alt="Bonfetti Logo" />
                </a>

                <nav className="nav nav-right">
                    <a href="#productos">Empresas</a>
                    <a href="#productos">Contacto</a>
                </nav>

              {/*  <a className="header-button" href="#productos">
                    Ver productos
                </a>*/}

            </div>
        </header>
    );
}

export default Header;