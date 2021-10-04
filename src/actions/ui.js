import { types } from "../types/types";
import { enviarImagen } from "../helpers/buscarActor";
import { obtenerInfo } from "../helpers/obtenerInfo";


export const buscarActor = (file) => {
    return async (dispatch, getState) => {
        try {
            const data = await enviarImagen(file);
            const { actorName } = data;
            const infoActor =  await obtenerInfo(actorName);
            console.log(infoActor);
            dispatch(establecerActor(actorName));
            dispatch(establecerInfo(infoActor));
        } catch (error) {
            console.log('Ha ocurrido un error');
        }
    }
  };

export const establecerActor = (actor)=>({
    type : types.establecerActor,
    payload: actor
});

export const establecerInfo = (info)=>({
    type : types.establecerInfo,
    payload: info    
});

export const borrarState = ()=>({
    type: types.limpiarState,
})

