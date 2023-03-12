import React from 'react';
import FooterBlock from './FooterBlock';

let nosotros = {titulo: 'NOSOTROS', 
				accesos: [{link: '/contacto', texto:'Contacto'},
						{link: '/sucursales', texto:'Nuestras sucursales'},
						{link: '/preguntas', texto:'Preguntas frecuentes'},
						{link: '/terminos', texto:'Terminos y condiciones'},
						{link: '/trabajo', texto:'Trabaja con nosotros'},
						{link: '/user/lista', texto:'Ver lista de usuarios'}
				]}

let servicio = {titulo: 'SERVICIO', 
				accesos: [{link: '/clases', texto:'Clases'},
						{link: '/precios', texto:'Garantia de precios'},
						{link: '/devolucion', texto:'Garantia de devolucion'},
						{link: '/pagos', texto:'Medios de pago'},
						{link: '/promociones', texto:'Promociones'},
						{link: '/productos/cargar', texto:'Cargar nuevo producto'}
				]}

let cliente = {titulo: 'CLIENTE', 
				accesos: [{link: '/user/registro', texto:'Registrate ahora'},
						{link: '/recuperarClave', texto:'Recuperar clave'},
						{link: '/user/perfil', texto:'Detalle de cliente'},
						{link: '/seguimiento', texto:'Seguimiento de orden'},
						{link: '/opiniones', texto:'Dejanos tu opinion'},
						{link: '/defensa', texto:'Defensa del consumidor'}
				]}
				
let redes = {titulo: 'REDES SOCIALES', 
			accesos: [{link: 'https://es-la.facebook.com/', texto:'Facebook', icono:"fab fa-facebook"},
					{link: 'https://www.instagram.com/', texto:'Instagram', icono: "fab fa-instagram"},
					{link: 'https://twitter.com/', texto:'Twitter', icono: "fab fa-twitter"},
					{link: 'https://www.linkedin.com', texto:'Linkedin', icono: "fab fa-linkedin"},
					{link: 'https://web.whatsapp.com/', texto:'Whatsapp', icono: "fab fa-whatsapp"}
				]}


function Footer(){
    return (
        <React.Fragment>
			{/* <!--SUSCRIPCION--> */}
			<section className="suscripcion">
				<span>SUSCRIBITE : </span>
				<section className="suscription-group">
					<input placeholder="Ingresa tu email" type="search" className="mail"/>
					<i className="far fa-paper-plane"></i>
				</section>
			</section>
			{/* <!--FOOTER--> */}
			<footer>
				<div className="pc">
					<FooterBlock titulo = {nosotros.titulo} accesos={nosotros.accesos} /> 
					<FooterBlock titulo = {servicio.titulo} accesos={servicio.accesos} />
					<FooterBlock titulo = {cliente.titulo} accesos={cliente.accesos} />
					<FooterBlock titulo = {redes.titulo} accesos={redes.accesos} />
				</div>
			</footer>
			<div className="copyright">
				<p>Copyright © 2022 Portal Mujer / Seguridad y Privacidad | Código de ética</p>
			</div>

        </React.Fragment>
    )
}
export default Footer;