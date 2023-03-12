import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

function DiagramaBarras(props){
    let data = {
        labels: props.labels,
        datasets: [{
            label: props.label,
            backgroundColor: '#E15172',
            borderColor: 'gray',
            borderWidth: 1,
            hoverBackgroundColor: '#fecec9',
            hoverBorderColor: '#ff0000',
            data: [...props.data, 0]
        }],
    }

    let opciones= {
        responsive: true
    }

    return (   
        <div className='torta'>
            <h3> {props.titulo} </h3>
            <Bar data={data} options= {opciones} />
        </div>
    )
}
export default DiagramaBarras;