import React from 'react';
import BarrasProductos from './BarrasProductos';
import DonasProductos from './DonasProductos';
import ListaDeProductos from './ListaDeProductos';

function ContentProductos(){
    return (
        <div className='detalle'>
            <h2 className='tituloh3'>METRICAS DE PRODUCTOS</h2>
            <DonasProductos />
            <BarrasProductos />
            <div>
                <ListaDeProductos />
            </div>
        </div>
    )
}
export default ContentProductos;