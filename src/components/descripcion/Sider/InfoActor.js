import React from 'react'
import { ImgActor } from './ImgActor'
import { Titulo } from '../../principal/Titulo';
import { useSelector } from 'react-redux';

export const InfoActor = () => {

    const { info } = useSelector(state => state.actor);
    const { imagen, nombre, genero, popular } = info;
    const url = `https://image.tmdb.org/t/p/w500${imagen}`;

    return (
        <div className='info-actor'>
            <ImgActor ruta={url} medida={'100'} ancho={250}/>
            <Titulo mensaje={nombre} />
            <div className="genero">{genero}</div>
            <h3>Popularidad: {popular}</h3>
        </div>
    )
}
