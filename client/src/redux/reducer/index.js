import {GET_DOGS, GET_TEMPERAMENTS, SEARCH_NAME, FILTER_TEMPERAMENTS} from '../../constants/constants'

const initialState= {
    allDogs : [],
    oneDog: [],
    temperaments: [],
    backupDogs : []
}


export default function rootReducer ( state= initialState, action ){

    switch(action.type){


        case GET_DOGS:
        return {
            ...state,
            allDogs: action.payload,
            backupDogs: action.payload

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
            case FILTER_TEMPERAMENTS:
                

                const dogsBeforeFilter = state.backupDogs
                const filterByTemperament = action.payload ? dogsBeforeFilter[23] :  dogsBeforeFilter[0] //0 = affenspincher ---- 3 = airedale 
                console.log('soy filter temperament', filterByTemperament)


                return {
                    ...state,
                    allDogs: filterByTemperament,
                    oneDog: []
                }    
         default:
            return state
    }
  

}