import React, { useState, useEffect } from 'react';

function ListaDeProductos(){
    let [productos, setProductos] = useState([]);
    let [pagina, setPagina] = useState(1);

    useEffect (()=> {
        fetch('http://localhost:3030/api/products/paginado/1')
        .then(response => response.json())
        .then(resultado => {
            setProductos(resultado.data);           
        })
        .catch(error => console.log(error))
    }, []) 

    useEffect(()=>{
        console.log("%cComponente actualizado", "color:yellow")
    }, [productos])

    useEffect(()=>{
        return () => console.log("%cComponente desmontado", "color:red")
    }, [])

    const cargar = async (n) =>{
        setPagina(n)
        console.log(`http://localhost:3030/api/products/paginado/${n}`)
        fetch(`http://localhost:3030/api/products/paginado/${n}`)
        .then(response => response.json())
        .then(resultado => {
            console.log(resultado.data)
            if (resultado.data.length > 0) {
                setProductos(resultado.data);  
                console.log('Entra por if')
            } else {
                console.log('entra por else')
                setPagina(n-1)
            }      
        })
        .catch(error => console.log(error))

    }
    
    return (   
        <div className='productos-section'>
            <h3 className='tituloh3'> Lista de productos </h3>
            <section className="lista-productos">
                <button onClick={() => cargar(pagina-1)} disabled = {pagina == 1} ><i className="fa-solid fa-arrow-left icono-flecha"></i></button>    
                {productos.map((producto , i) => { 
                    return <article className="tarjeta-producto" key={i}>

                            <div className="img-tarjeta-producto">
                                <img src={producto.imagen}  alt="" className="img-product" />
                            </div>
                            <div>
                                <h3 className="descripcion">
                                    {producto.name} {producto.marca}
                                </h3>
                            </div>
                            <div className="foot-article">
                                <p className="precio"> ID: {producto.id} </p>
                            </div>
                            <div className="foot-article">
                                <p className="precio"> Precio: {producto.precio} </p>
                            </div>
                            <div className="foot-article">
                                <p className="precio"> Stock: {producto.stock} </p>
                            </div>
                        </article>
                })}         
                <button onClick={() => cargar(pagina+1)} ><i className="fa-solid fa-arrow-right icono-flecha"></i></button>        
            </section>
            
        </div>
    )
}
export default ListaDeProductos;