import React from 'react'
import { Image } from 'antd';
export const ImgActor = ({ ruta, medida, ancho=200 }) => {
    return (
        <Image src={ruta} width={`${medida}%`} height={ancho} alt='imagen actor' style={{borderRadius:'5px'}}/>
    )
}
