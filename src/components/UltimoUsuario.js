import React, { useState, useEffect } from 'react';
import UltimoRegistro from './UltimoRegistro';

function UltimoUsuario(){
    let [usuario, setUsuario] = useState([]);
    let [imagen, setImagen] = useState([]);

    // DATOS PROPS
    let titulo = 'Ultimo usuario id: '

    useEffect (()=> {
        fetch('http://localhost:3030/api/users')
        .then(response => response.json())
        .then(resultado => {
            let ultimoRegistro = resultado.data[resultado.data.length - 1]
            let perfil;

            if(ultimoRegistro.perfil == 1){
                perfil = "Administrador"
            }else{
                perfil =  "Cliente"
            }

            let informacion = [
                {
                    label: 'Nombre y apellido:',
                    info: ultimoRegistro.nombre + ' ' + ultimoRegistro.apellido
                },
                {
                    label: 'Email:',
                    info: ultimoRegistro.email
                },
                {
                    label: 'Perfil:',
                    info: perfil
                },
                {
                    label: 'Nickname: ',
                    info: ultimoRegistro.nickname
                },
            ];

            titulo += ultimoRegistro.id;
            
            setImagen(ultimoRegistro.imagen)
            setUsuario(informacion);
        
    })
        .catch(error => console.log(error))
    }, []) 

    useEffect(()=>{
        console.log("%cComponente actualizado", "color:yellow")
    }, [usuario])

    useEffect(()=>{
        return () => console.log("%cComponente desmontado", "color:red")
    }, [])

    return (   
           <UltimoRegistro data={usuario}  titulo= "Ultimo Usuario"  imagen = {imagen}/>
    )
}
export default UltimoUsuario;