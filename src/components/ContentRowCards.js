import SmallCard from './SmallCard';
import React , { useState, useEffect } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import ContentPrincipal from './ContentPrincipal';
import ContentUsuarios from './ContentUsuarios';
import ContentProductos from './ContentProductos';
import ContentCategorias from './ContentCategorias';
import NotFound from './NotFound';

/*  Cada set de datos es un objeto literal */

/* <!-- Usuarios registrados --> */

let usuarios = {
    title: 'Cantidad total de usuarios',
    color: 'rosa-4', 
    cuantity: 0,
    icon: 'fa-solid fa-users',
    link: '/ContentUsuarios'
}

/* <!-- Productos cargados --> */

let productos = {
    title:'Cantidad total de productos', 
    color:'rosa-4', 
    cuantity: 0,
    icon:'fa-solid fa-shirt',
    link: '/ContentProductos'        
}

/* <!-- Categorias de productos  --> */

let categorias = {
    title:'Cantidad total de categorias' ,
    color:'rosa-4',
    cuantity: 0,
    icon:'fa-solid fa-layer-group',
    link: '/ContentCategorias'  
}

let cartProps = [usuarios, productos, categorias];

function ContentRowCards(){

    const [apiUsuarios, setTotalUsuarios] = useState([]);
    const [apiProductos, setTotalProductos] = useState([]);
    const [apiCategorias, setTotalCategorias] = useState([]);

    useEffect (()=> {
        fetch('http://localhost:3030/api/users')
        .then(response => response.json())
        .then(data => {
            setTotalUsuarios(data.total)
        })
        .catch(error => console.log(error))
    }, []) 

    usuarios.cuantity = apiUsuarios;

    useEffect (()=> {
        fetch('http://localhost:3030/api/products')
        .then(response => response.json())
        .then(data => {
            setTotalProductos(data.total)
        })
        .catch(error => console.log(error))
    }, []) 

    productos.cuantity = apiProductos


    useEffect (()=> {
        fetch('http://localhost:3030/api/categories')
        .then(response => response.json())
        .then(data => {
            setTotalCategorias(data.total)
        })
        .catch(error => console.log(error))
    }, []) 

    categorias.cuantity = apiCategorias


    return (
        <React.Fragment>
            <div className='tarjetas-lateral'>
                
                {cartProps.map( (card, i) => {

                    return <SmallCard {...card} key={i}/>
                
                })}
            </div>

            <Switch>
                <Route exact path="/">
                    <ContentPrincipal/>
                </Route>
                <Route path="/ContentUsuarios">
                    <ContentUsuarios />
                </Route>
                <Route path="/ContentProductos">
                    <ContentProductos />
                </Route>
                <Route path="/ContentCategorias">
                    <ContentCategorias/>
                </Route>
                <Route component={NotFound} />
            </Switch>
 
        </React.Fragment>
    )
}

export default ContentRowCards;