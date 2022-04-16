import {GET_DOGS, GET_TEMPERAMENTS, SEARCH_NAME, FILTER_TEMPERAMENTS, FILTER_BREED} from '../../constants/constants'

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
            
                const dogsForFilter = state.backupDogs
                let deleteUndefined = dogsForFilter.filter((el) => el.temperament!==undefined)
                
                let ApllyFilter = deleteUndefined.filter((el)=> el.temperament.includes(action.payload))
  
                const filterByTemperament = action.payload ==='todos'?  dogsForFilter: ApllyFilter
            
                return {
                    ...state,
                    allDogs: filterByTemperament,
                    oneDog:  []
                }    

                case FILTER_BREED:
                 const letsFilter = state.backupDogs
                 let applyFilterBreed = letsFilter.filter((el => el.name.includes(action.payload)))
                    return {
                        ...state,
                        allDogs: applyFilterBreed

                    }
                
         default:
            return state
    }
  

}