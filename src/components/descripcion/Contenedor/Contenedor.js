import React from 'react'
import { Layout }  from 'antd'
import { Titulo } from '../../principal/Titulo';
import { ListaPeliculas } from './ListaPeliculas';

const { Content } = Layout;

export const Contenedor = () => {
    return (
        <Content>
            <Titulo mensaje='Películas'/>
            <hr/>
            <ListaPeliculas />
        </Content>
    )
}
