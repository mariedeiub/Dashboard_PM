import React from 'react';


function UltimoRegistro(props){
    return (
        
        <div className='detalle-ultimo-registro'>
           
            <section className="imagen">
                <img src={props.imagen} alt="Imagen"/>
            </section>

            <section className="informacion-ultimo-registro">
                    <h3> {props.titulo} </h3>
                    {props.data.map((dato,i)=> {
                        return <div className="label-group" key={i}>
                                    <label className="label">{dato.label} </label>
                                    <label className='label-input' for="usuario"> {dato.info} </label>
                                </div>
                                
                        })
                    }
            </section>    
        </div>
    )
}

export default UltimoRegistro;