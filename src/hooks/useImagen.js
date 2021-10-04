import { useState } from "react"

export const useImagen = ()=>{
    
    const [imagen, setImagen] = useState({});

    const guardarImagen = (imagen)=>{
        setImagen(imagen);
    }
    return [imagen, guardarImagen];
}