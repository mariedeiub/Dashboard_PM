import React, { useState, useEffect } from 'react';
import DiagramaDona from './DiagramaDona';


function DonasUsuarios(){
    let [usuarios, setUsuarios] = useState([]);


    useEffect (()=> {
        fetch('http://localhost:3030/api/users/localidades/')
        .then(response => response.json())
        .then(resultado => {
            let total= 0;

            resultado.data.forEach(prov => {
                total += prov.cantidad
            });

            let subtotal = total - (resultado.data[0].cantidad+resultado.data[1].cantidad+resultado.data[2].cantidad)
            let cantidadResto = subtotal/total

            console.log('resto: ' + cantidadResto)

            setUsuarios([{
                nombre: resultado.data[2].localidad + ' ' + resultado.data[2].cantidad,
                cantidad: [((resultado.data[2].cantidad/total)*100).toFixed(2), 100],
            },
            {
                nombre: resultado.data[1].localidad + ' ' + resultado.data[1].cantidad,
                cantidad: [((resultado.data[1].cantidad/total)*100).toFixed(2), 100],
            },
            {
                nombre: resultado.data[0].localidad + ' ' + resultado.data[0].cantidad,
                cantidad: [((resultado.data[0].cantidad/total)*100).toFixed(2), 100],
            },
            {
                nombre: 'Resto del país ' + subtotal,
                cantidad:[(cantidadResto*100).toFixed(2), 100]
            }]);
            
        })
        .catch(error => console.log(error))
    }, []) 

    useEffect(()=>{
        console.log("%Componente actualizado", "color:yellow")
    }, [usuarios])

    useEffect(()=>{
        return () => console.log("%Componente desmontado", "color:red")
    }, [])

    return (   
            <DiagramaDona data ={usuarios} titulo='Cantidad de clientes por provincia'/>
    )
}
export default DonasUsuarios;