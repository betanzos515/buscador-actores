import React from 'react';
import { Typography } from 'antd';
import { ImgActor } from '../Sider/ImgActor';

const { Title } = Typography;

export const Pelicula = ({pelicula}) => {

    const { titulo, puntaje, descripcion, imagen, lanzamiento } = pelicula;
    const urlImage = `https://image.tmdb.org/t/p/w500${imagen}`;
    return (
        <div className='pelicula'>
            <div className="header-pelicula">
                <Title level={2}>{titulo}</Title>
                <div className='puntaje-info'>
                    <div className='puntaje'>
                        <i className="fas fa-star"></i>
                        <div>{puntaje}/10 </div> 
                    </div>
                </div>
            </div>       
            <div className="contenedor-pelicula">   
                <div className='imagen-pelicual'>
                    <ImgActor ruta={urlImage}/>
                </div>
                <div className='contenido-pelicula'>
                    <p>{descripcion}</p>
                    <p><strong>Fecha de estreno :</strong>{lanzamiento}</p>
                </div>
            </div> 
        </div>
    )
}
