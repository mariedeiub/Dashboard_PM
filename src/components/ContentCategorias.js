import React from 'react';
import BarrasCategorias from './BarrasCategorias';
import ListaDeCategorias from './ListaDeCategorias';
import TortaCategorias from './TortaCategorias';

function ContentCategorias(){
    return (
        <div className='detalle'>
            <h2 className='tituloh3'>METRICAS DE CATEGORIAS</h2>
            <TortaCategorias />
            <BarrasCategorias />
            <ListaDeCategorias titulo= 'LISTA DE ACCESORIOS' url='http://localhost:3030/api/categories/1/paginado/'/>        
            <ListaDeCategorias titulo= 'LISTA DE LENCERIA' url='http://localhost:3030/api/categories/2/paginado/'/> 
            <ListaDeCategorias titulo= 'LISTA DE INDUMENTARIA' url='http://localhost:3030/api/categories/3/paginado/'/> 
            <ListaDeCategorias titulo= 'LISTA DE COSMETICOS' url='http://localhost:3030/api/categories/4/paginado/'/> 
            <ListaDeCategorias titulo= 'LISTA DE CUIDADO PERSONAL' url='http://localhost:3030/api/categories/5/paginado/'/>        
         
        </div>
    )
}
export default ContentCategorias;