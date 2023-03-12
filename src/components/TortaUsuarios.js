import React, { useState, useEffect } from 'react';
import DiagramaTorta from './DiagramaTorta'

function TortaUsuarios(){
    let [usuarios, setUsuarios] = useState([]);
    let porcentajes = [];
    let labels= ["Administradores", "Clientes"];
    let color = ['#E15172', '#fecec9'];

    useEffect (()=> {
        fetch('http://localhost:3030/api/users')
        .then(response => response.json())
        .then(resultado => {
            let admin= 0;
            let cliente= 0;
            resultado.data.forEach(user => {
                if (user.perfil == 1){
                    admin++;
                } else{
                    cliente++;
                }
            });

            porcentajes.push(((admin/resultado.total)*100).toFixed(2))
            porcentajes.push(((cliente/resultado.total)*100).toFixed(2))

            setUsuarios(porcentajes);
            
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
            <DiagramaTorta labels={labels} data={usuarios} color={color}/>
    )
}
export default TortaUsuarios;