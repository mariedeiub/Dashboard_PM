import React, { useState, useEffect } from 'react';
import DiagramaTorta from './DiagramaTorta'

function TortaCategorias(){
    let [categorias, setCategorias] = useState([]);
    let porcentajes = [];
    let labels= ["Accesorios", "Lenceria", "Indumentaria", "Cosmeticos", "C. Personal"];
    let color = ['#E15172', '#fecec9','#EA859D','#EC4067', '#C02146'];

    useEffect (()=> {
        fetch('http://localhost:3030/api/categories')
        .then(response => response.json())
        .then(resultado => {
            let total= 0;
            resultado.data.forEach(categoria => {
                total += categoria.cantidad;
            });

            resultado.data.forEach(categoria => {
                porcentajes.push(((categoria.cantidad/total)*100).toFixed(2))
            });
            
            setCategorias(porcentajes);
            
        })
        .catch(error => console.log(error))
    }, []) 

    useEffect(()=>{
        console.log("%Componente actualizado", "color:yellow")
    }, [categorias])

    useEffect(()=>{
        return () => console.log("%Componente desmontado", "color:red")
    }, [])
    
    return (   
            <DiagramaTorta labels={labels} data={categorias} color={color}/>
    )
}
export default TortaCategorias;