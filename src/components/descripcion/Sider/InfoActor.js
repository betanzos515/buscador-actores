import React from 'react'
import { ImgActor } from './ImgActor'
import { Titulo } from '../../principal/Titulo';
export const InfoActor = ({ nombre, genero, popularidad }) => {
    return (
        <div className='info-actor'>
            <ImgActor ruta={'https://imagenes.elpais.com/resizer/3_QTYZtJ8v2TUV-ZMoDMNxJek98=/980x735/cloudfront-eu-central-1.images.arcpublishing.com/prisa/CNPZFVXLZNH2ZITC5MY3LVOF44.jpg'} medida={'100'}/>
            <Titulo mensaje={nombre} />
            <div className="genero">{genero}</div>
            <h3>{popularidad}</h3>
        </div>
    )
}
