import React, { useState, useEffect } from 'react';
import DiagramaBarras from './DiagramaBarras'

function BarrasUsuarios(){
    let [usuarios, setUsuarios] = useState([]);

    // DATOS PROPS
    let labels = ["Entre 18 y 30", "Entre 31 y 45", "Entre 46 y 55", "Entre 56 y 65", "Mayores de 65"];
    let label = 'Usuarios'
    let titulo = 'Cantidad de clientes por rango de edades'

    useEffect (()=> {
        fetch('http://localhost:3030/api/users')
        .then(response => response.json())
        .then(resultado => {
            let entre18y30 = 0;
            let entre31y45 = 0;
            let entre46y55 = 0;
            let entre56y65 = 0;
            let mayores65 = 0;
            let edades = [];
            resultado.data.forEach(user => {
                if (user.edad >= 18 && user.edad < 31){
                    entre18y30++;
                } else if (user.edad > 30 && user.edad < 46){
                    entre31y45++;
                } else if (user.edad > 45 && user.edad < 56){
                    entre46y55++;
                }else if (user.edad > 55 && user.edad < 66){
                    entre56y65++;
                }else{
                    mayores65++;
                }
            });

            edades.push(entre18y30)
            edades.push(entre31y45)
            edades.push(entre46y55)
            edades.push(entre56y65)
            edades.push(mayores65)

            setUsuarios(edades);
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
            <DiagramaBarras titulo={titulo} labels={labels} label={label} data={usuarios} />
    )
}
export default BarrasUsuarios;