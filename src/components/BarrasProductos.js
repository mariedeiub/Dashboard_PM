import React, { useState, useEffect } from 'react';
import DiagramaBarras from './DiagramaBarras'

function BarrasProductos(){
    let [productos, setUsuarios] = useState([]);

    // DATOS PROPS
    let labels = ["0 - $10.000", "$10.001 - $15.000", "$15.001 - $20.000", "$20.001 - $25.000", "Mas de $25.000"];
    let label = 'Productos'
    let titulo = 'Cantidad de productos por rango de precios'

    useEffect (()=> {
        fetch('http://localhost:3030/api/products/')
        .then(response => response.json())
        .then(resultado => {
            let entre0y10mil = 0;
            let entre10mily15mil = 0;
            let entre15mily20mil = 0;
            let entre20mily25mil = 0;
            let mas25mil = 0;
            let precios = [];
            resultado.data.forEach(product => {
                if (product.precio <= 10000){
                    entre0y10mil++;
                } else if (product.precio > 10000 && product.precio <= 15000){
                    entre10mily15mil++;
                } else if (product.precio > 15000 && product.precio <= 20000){
                    entre15mily20mil++;
                }else if (product.precio > 20000 && product.precio <= 25000){
                    entre20mily25mil++;
                }else{
                    mas25mil++;
                }
            });

            precios.push(entre0y10mil)
            precios.push(entre10mily15mil)
            precios.push(entre15mily20mil)
            precios.push(entre20mily25mil)
            precios.push(mas25mil)

            setUsuarios(precios);
        })
        .catch(error => console.log(error))
    }, []) 

 
    useEffect(()=>{
        console.log("%Componente actualizado", "color:yellow")
    }, [productos])

    useEffect(()=>{
        return () => console.log("%Componente desmontado", "color:red")
    }, [])

    return (   
            <DiagramaBarras titulo={titulo} labels={labels} label={label} data={productos} />
    )
}
export default BarrasProductos;