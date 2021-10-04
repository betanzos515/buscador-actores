import { types } from '../types/types';
const initialState = {
    error:false,
    actor:'',
    info:{}
}

export const actorReducer = ( state = initialState, action )=>{
    switch(action.type){
        case types.establecerActor:
            return{
                ...state,
                actor : action.payload
            };
        case types.establecerInfo:
            return{
                ...state,
                info: action.payload
            }
        case types.limpiarState:
            return initialState
        default:
            return state
    }
} 