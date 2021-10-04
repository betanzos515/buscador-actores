// eslint-disable-next-line
import { Toast } from "./toast";

export const obtenerInfo = async (actor)=>{
    console.log(actor);
    const urlAPI = `https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&include_adult=false&query=${actor}`;

    let opciones = {
        method: 'GET',
        redirect: 'follow'
      };
      
      const respuesta = await fetch(urlAPI, opciones)
      return  await respuesta.json();
}