import React, { useState, useEffect } from 'react';
import DiagramaBarras from './DiagramaBarras'

function BarrasCategorias(){
    let [categorias, setCategorias] = useState([]);
    // let [labels, setLabels] = useState([]);


    // DATOS PROPS
    let labels = ["Accesorios", "Lenceria", "Indumentaria", "Cosmeticos", "C. Personal"];
    let label = 'Productos'
    let titulo = 'Cantidad de productos por categoria'

    useEffect (()=> {
        fetch('http://localhost:3030/api/categories')
        .then(response => response.json())
        .then(resultado => {
            
            let labels = [];
            let cantidadCategorias=[];
            resultado.data.forEach(categoria => {
                labels.push(categoria.categorias.nombre);
                cantidadCategorias.push(categoria.cantidad)
            });
            
            console.log('LABELS: ' + labels)
            console.log('CANTIDAD: ' + cantidadCategorias)
            setCategorias(cantidadCategorias);
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
            <DiagramaBarras titulo={titulo} labels={labels} label={label} data={categorias} />
    )
}
export default BarrasCategorias;