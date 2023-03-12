import React from 'react';

function FooterBlock(props){
    return (
        <React.Fragment>
			<section className="footer-pc">
				<h3>{props.titulo}</h3>
				    <ul>
						{props.accesos.map((prop, i) => {return <li key={i}> 
                                                                <i className={prop.icono}></i>
                                                                <a href={prop.link}> {prop.texto}</a>
                                                                </li>})}						
					</ul>
				</section>
        </React.Fragment>
    )
}
export default FooterBlock;