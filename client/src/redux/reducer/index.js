import {GET_DOGS, GET_TEMPERAMENTS, SEARCH_NAME} from '../../constants/constants'

const initialState= {
    allDogs : [],
    oneDog: [],
    temperaments: []
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
            case GET_TEMPERAMENTS:
                return {
                    ...state,
                    temperaments: action.payload
                }

         default:
            return state
    }
  

}