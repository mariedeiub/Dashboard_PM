import React from 'react';
import BarrasUsuarios from './BarrasUsuarios';
import DonasUsuarios from './DonasUsuarios';
import TortaUsuarios from './TortaUsuarios';

function ContentUsuarios(){
    return (
                <div className='detalle'>
                    <h2 className='tituloh3'>METRICAS DE USUARIOS</h2>
                    <TortaUsuarios />
                    <BarrasUsuarios />
                    <DonasUsuarios />
                </div>

    )
}
export default ContentUsuarios;