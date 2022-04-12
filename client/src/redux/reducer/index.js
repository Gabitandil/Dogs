import {GET_DOGS} from '../../constants/constants'

const initialState= {
    allDogs : []
}


export default function rootReducer ( state= initialState, action ){

    switch(action.type){


        case GET_DOGS:
        return {
            ...state,
            allDogs: "hola"

        }


         default:
            return state
    }
  

}