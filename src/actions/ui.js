import { types } from "../types/types";
import { enviarImagen } from "../helpers/buscarActor";
import { obtenerInfo } from "../helpers/obtenerInfo";


export const buscarActor = (file) => {
    return async (dispatch) => {
        try {
            const data = await enviarImagen(file);
            const { error } = data;
            if(error !== ''){
                dispatch(establecerError());
            }else{
                const { actorName } = data;
                const infoActor =  await obtenerInfo(actorName);
                dispatch(establecerActor(actorName));
                dispatch(establecerInfo(infoActor));
            }

        } catch (error) {
            console.log('Ha ocurrido un error');
        }
    }
  };

export const establecerActor = (actor)=>({
    type : types.establecerActor,
    payload: actor,
    error:false
});

export const establecerInfo = (info)=>({
    type : types.establecerInfo,
    payload: info    
});

export const borrarState = ()=>({
    type: types.limpiarState,
})

export const establecerError = ()=>({
    type: types.establecerError
});

