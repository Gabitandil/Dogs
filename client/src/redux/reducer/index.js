import {GET_DOGS, SEARCH_NAME} from '../../constants/constants'

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
        case SEARCH_NAME:
            return {
                ...state,
                oneDog: action.payload,
                allDogs: []
            }


         default:
            return state
    }
  

}