import React, { useState, useEffect } from 'react';

function ListaDeCategorias(props){
    let [productos, setProductos] = useState([]);
    let [pagina, setPagina] = useState(1);

    useEffect (()=> {
        fetch(props.url+1)
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
        console.log(pagina)
        setPagina(n)
        fetch(`${props.url}${n}`)
        .then(response => response.json())
        .then(resultado => {
            if (resultado.data.length > 0) {
                setProductos(resultado.data);  
            } else {
                setPagina(n-1)
            }
                   
        })
        .catch(error => console.log(error))

    }

    
    return (   
        <div className='productos-section'>
            <h3 className='tituloh3'> {props.titulo} </h3>
            <section className="lista-productos">
                <button onClick={() => cargar(pagina-1)} disabled = {pagina == 1} ><i className="fa-solid fa-arrow-left icono-flecha"></i></button>    
                {productos.map((producto , i) => { 
                    return <article className="tarjeta-producto" key={i}>
                            { console.log("http://localhost:3030/" + producto.productos.imagen )}
                            <div className="img-tarjeta-producto">
                                <img src= { "http://localhost:3030" + producto.productos.imagen } alt="" className="img-product" />
                            </div>
                            <div>
                                <h3 className="descripcion">
                                    {producto.productos.nombre} {producto.productos.marca}
                                </h3>
                            </div>
                            <div className="foot-article">
                                <p className="precio"> ID: {producto.productos.producto_id} </p>
                            </div>
                            <div className="foot-article">
                                <p className="precio"> Precio: {producto.productos.precio} </p>
                            </div>
                            <div className="foot-article">
                                <p className="precio"> Stock: {producto.productos.stock} </p>
                            </div>
                        </article>
                })}         
                <button onClick={()=> cargar(pagina+1)} ><i className="fa-solid fa-arrow-right icono-flecha"></i></button>        
            </section>
            
        </div>
    )
}
export default ListaDeCategorias;