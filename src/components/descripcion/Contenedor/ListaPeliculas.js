import React from 'react'
import { Pelicula } from './Pelicula'
import { useSelector } from 'react-redux'

export const ListaPeliculas = () => {
    const { info } = useSelector(state => state.actor)
    const { peliculas } = info;
    return (
        <div className='lista-peliculas'>
            {
                peliculas.map(pelicula=>(
                    <Pelicula pelicula={ pelicula }/>
                ))
            }
        </div>
    )
}
