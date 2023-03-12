import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function DiagramaDona(props){

    let info = props.data.map(prop => {
        return ({
            labels: [prop.nombre],
            datasets: [{
                label: '5',
                data: prop.cantidad,
                backgroundColor: ['#FF6384'],
                hoverOffset: 4
            }]})
    });


    let opciones= {
        responsive: true
    }

    return (   
        <div className='donas'>
            <h3> {props.titulo} </h3>
            <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                {info.map((dona, i) => {

                    return <div style={{width:'300px' , height:'200px'}}> 
                            <Doughnut data={dona} options= {opciones} plugins={{fillText:'10'}} key={i} />
                            </div>
                })}
            </div>
        </div>
    )
}
export default DiagramaDona;