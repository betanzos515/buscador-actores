// eslint-disable-next-line
import { ColumnGroup } from "rc-table";
import { Toast } from "./toast";

export const obtenerInfo = async (actor)=>{
    console.log(actor);
    const urlAPI = `https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&include_adult=false&query=${actor}`;

    let opciones = {
        method: 'GET',
        redirect: 'follow'
      };
      
      const respuesta = await fetch(urlAPI, opciones)
      const data = await respuesta.json();
      const { results } = data;

      const info_actor = {
        nombre:'',
        genero:'',
        popular:'',
        imagen:'',
        peliculas:[]
      }

      results.forEach( (obj,indice)=>{
        const { known_for } = obj;
        if(indice === 0){
          info_actor.nombre = obj.name;
          if(obj.gender === 1){
            info_actor.genero = 'Mujer';
          }else{
            info_actor.genero = 'Hombre';
          }
          info_actor.popular = obj.popularity;
          info_actor.imagen = obj.profile_path;
          console.log(obj.profile_path);
        }

        known_for.forEach(pelicula=>{
          const peli = {
            id:pelicula.id,
            titulo:pelicula.original_title,
            descripcion:pelicula.overview,
            imagen:pelicula.poster_path,
            lanzamiento:pelicula.release_date,
            puntaje:pelicula.vote_average
          }
          info_actor.peliculas.push(peli);
        })
      })
      return  info_actor;
}