import React from 'react';
import UltimoProducto from './UltimoProducto';
import UltimoUsuario from './UltimoUsuario';


function ContentPrincipal(){
    return (
        <div className="detalle">
            <UltimoUsuario />
            <UltimoProducto />
        </div>
    )
}

export default ContentPrincipal;