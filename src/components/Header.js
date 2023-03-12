import React from 'react';
import logo from '../assets/images/logo-PM.png';

function Header(){
    return (
        <React.Fragment>
			<header>
                <nav>
                    <section className="burger-menu">
                        <i className="fas fa-bars"></i>
                    </section>
                    {/* <!--SECCION LOGO--> */}
                    <section className="logo">
                        <a href="http://localhost:3030/home"><img src={logo} alt=""/></a>
                    </section>
                    {/* <!-- BARRA DE BUSQUEDA-->      */}
                    <section className="group">  
                        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                        <input placeholder="Search" type="search" className="input"/>
                    </section>
                    <section className="favorito">
                        <i className="far fa-heart"></i>
                    </section>
                    <section className="icono">
                        <a href="/carrito"><i className="ion-ios-cart-outline"></i></a>
                    </section>
                    <section className="icono">
                        <a className="abajo2"href="/user/login"><i className="ion-person"></i></a>    
                    </section>
                </nav>
                <div className="nav-bar">
                    <ul className="lista1">
                        <li><a href="/categorias">+ CATEGORIAS</a></li>
                    </ul>
                    <ul class="lista2">
                        <li><a href="/ofertas">OFERTAS</a></li>
                        <li><a href="/sucursales">SUCURSALES</a></li>
                        <li><a href="/empresas">EMPRESAS</a></li>
                        <li><a href="/contactanos">CONTACTANOS</a></li>
                    </ul>
                </div>
            </header>
        </React.Fragment>
    )
}
export default Header;