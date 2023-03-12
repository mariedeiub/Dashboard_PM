import React from 'react';
import PropTypes from 'prop-types';
import {Link, Route, Switch} from 'react-router-dom';

function SmallCard(props){
    return(
        <Link className="nav-link" to={props.link}>
            <div className={`tarjeta-dashboard border-left-${props.color}` }>
                <div className="col-auto">
                    <i className={`fas ${props.icon} fa-2x icono-tarjetas-dashboard`}></i>
                </div>
                <div className="col">
                    <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}> {props.title}</div>
                    <h3 className='tarjetas-cantidad-total'>{props.cuantity}</h3>
                </div>       
            </div>
        </Link>
    )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

SmallCard.defaultProps = {
    title: 'No Title',
    color: 'success',
    cuantity: 'No cuatity',
    icon: 'fa-clipboard-list'
}

/* PROPTYPES */

SmallCard.propTypes = {
    atritutes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        cuantity: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        icon: PropTypes.string.isRequired
    })
}



export default SmallCard;