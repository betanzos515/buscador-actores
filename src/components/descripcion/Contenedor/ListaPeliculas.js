import React from 'react'
import { peliculas } from '../../../helpers/info'
import { Pelicula } from './Pelicula'

export const ListaPeliculas = () => {
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
