import React from 'react'
import { Image } from 'antd';
export const ImgActor = ({ ruta, medida }) => {
    return (
        <Image src={ruta} width={`${medida}%`} height={200} alt='imagen actor'/>
    )
}
