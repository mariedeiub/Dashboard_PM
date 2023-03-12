import React, { useState, useEffect } from 'react';
import UltimoRegistro from './UltimoRegistro';

function UltimoProducto(){
    let [producto, setProducto] = useState([]);
    let [imagen, setImagen] = useState([]);

    // DATOS PROPS
    let titulo = 'Ultimo Producto id: '

    useEffect (()=> {
        fetch('http://localhost:3030/api/products')
        .then(response => response.json())
        .then(resultado => {
            let ultimoRegistro = resultado.data[resultado.data.length - 1]
            let perfil;
            
            titulo += ultimoRegistro.id;

            let informacion = [
                {
                    label: 'Nombre:',
                    info: ultimoRegistro.name 
                },
                {
                    label: 'Marca:',
                    info: ultimoRegistro.marca
                },
                {
                    label: 'Precio:',
                    info: ultimoRegistro.precio
                },
                {
                    label: 'Stock: ',
                    info: ultimoRegistro.stock
                },
            ];

            setProducto(informacion);
            setImagen(ultimoRegistro.imagen)
        
    })
        .catch(error => console.log(error))
    }, []) 

    useEffect(()=>{
        console.log("%cComponente actualizado", "color:yellow")
    }, [producto])

    useEffect(()=>{
        return () => console.log("%cComponente desmontado", "color:red")
    }, [])

    return (   
            
           <UltimoRegistro data={producto}  titulo= "Ultimo Producto"  imagen= {imagen}/>
    )
}
export default UltimoProducto;