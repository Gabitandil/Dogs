import {GET_DOGS} from '../../constants/constants'

const initialState= {
    allDogs : [],
    oneDog: []
}


export default function rootReducer ( state= initialState, action ){

    switch(action.type){


        case GET_DOGS:
        return {
            ...state,
            allDogs: action.payload

        }


         default:
            return state
    }
  

}