import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

function DiagramaTorta(props){
    let data = {
        labels: props.labels,
        datasets: [{
            data: props.data,
            backgroundColor: props.color
        }],
    }
    let opciones= {
        responsive: true
    }


    return (   
        <div className='torta'>
            <Pie data={data} options= {opciones} />
        </div>
    )
}
export default DiagramaTorta;