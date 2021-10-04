import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography
export const Titulo = ({mensaje}) => {
    return (
        <Title className='titulo' style={{fontSize: '2.6rem', color:'#3498DB'}}>
            {mensaje}
        </Title>
    )
}
