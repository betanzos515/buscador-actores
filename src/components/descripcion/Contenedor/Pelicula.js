import React from 'react';
import { Typography } from 'antd';
import { ImgActor } from '../Sider/ImgActor';

const { Title } = Typography;

export const Pelicula = ({pelicula}) => {

    const { titulo, puntaje, descripcion, imagen, estreno } = pelicula;

    return (
        <div className='pelicula'>
            <div className="header-pelicula">
                <Title level={2}>{titulo}</Title>
                <div>
                    {puntaje}/10
                </div>
            </div>       
            <div className="contenedor-pelicula">   
                <div className='imagen-pelicual'>
                    <ImgActor ruta={imagen}/>
                </div>
                <div className='contenido-pelicula'>
                    <p>{descripcion}</p>
                    <p><strong>Fecha de estreno :</strong>{estreno}</p>
                </div>
            </div> 
        </div>
    )
}
