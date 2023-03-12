import React, { useState, useEffect } from 'react';
import DiagramaDona from './DiagramaDona';


function DonasProductos(){
    let [productos, setUsuarios] = useState([]);

    useEffect (()=> {
        fetch('http://localhost:3030/api/products/ventas/')
        .then(response => response.json())
        .then(resultado => {
            let total= 0;

            resultado.data.forEach(prod => {
                total += prod.cantidad
            });

            let subtotal = total - (resultado.data[0].cantidad+resultado.data[1].cantidad+resultado.data[2].cantidad)
            let cantidadResto = subtotal/total

            console.log('resto: ' + cantidadResto)

            setUsuarios([{
                nombre: resultado.data[2].producto.nombre + ' ' + resultado.data[2].cantidad,
                cantidad: [((resultado.data[2].cantidad/total)*100).toFixed(2), 100],
            },
            {
                nombre: resultado.data[1].producto.nombre + ' ' + resultado.data[1].cantidad,
                cantidad: [((resultado.data[1].cantidad/total)*100).toFixed(2), 100],
            },
            {
                nombre: resultado.data[0].producto.nombre + ' ' + resultado.data[0].cantidad,
                cantidad: [((resultado.data[0].cantidad/total)*100).toFixed(2), 100],
            },
            {
                nombre: 'Resto de los productos ' + subtotal,
                cantidad:[(cantidadResto*100).toFixed(2), 100]
            }]);
            
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
            <DiagramaDona data ={productos} titulo='Productos mas vendidos'/>
    )
}
export default DonasProductos;