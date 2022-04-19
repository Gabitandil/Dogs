import {GET_DOGS, GET_TEMPERAMENTS, SEARCH_NAME, FILTER_TEMPERAMENTS, FILTER_BREED, ALPHABETICAL_SORT, SORT_WEIGHT, GET_DETAILS} from '../../constants/constants'

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
            backupDogs: action.payload,
            oneDog: []
            
        }
        case SEARCH_NAME:
            return {
                ...state,
                allDogs: action.payload,
                oneDog: []
            }
            case GET_TEMPERAMENTS:
                return {
                    ...state,
                    temperaments: action.payload,
                    oneDog: []

                }
            case FILTER_TEMPERAMENTS:
            
                const dogsForFilter = state.backupDogs
                let deleteUndefined = dogsForFilter.filter((el) => el.temperament!==undefined)
                
                let ApllyFilter = deleteUndefined.filter((el)=> el.temperament.includes(action.payload))
  
                const filterByTemperament = action.payload ==='todos'?  dogsForFilter: ApllyFilter
            
                return {
                    ...state,
                    allDogs: filterByTemperament,
                    oneDog: []
                }    

                case FILTER_BREED:
                 const letsFilter = state.backupDogs
                 let applyFilterBreed = letsFilter.filter((el => el.name.includes(action.payload)))
                    return {
                        ...state,
                        allDogs: applyFilterBreed,
                        oneDog: []
                    }
                case ALPHABETICAL_SORT: 
                     
                     let  alphabeticalSort = action.payload === 'a-z'?state.backupDogs.sort((a, b) =>  a.name.localeCompare(b.name)) :  state.backupDogs.sort((a, b) => -1 * a.name.localeCompare(b.name))
                     let arrayAux = alphabeticalSort.map(el => el ) 
                   
                return {
                    ...state,
                    allDogs: arrayAux
                }
                
                case SORT_WEIGHT : 
                
                let filterInvalidDogs = state.backupDogs.filter(el => el.weight!== "NaN"  && el.weight !== "NaN - 8")
                
               
                let filter  = action.payload === 'peso_menor'? filterInvalidDogs.sort((a,b) => parseInt(a.weight[0]) > b.weight[0]) : action.payload === 'peso_mayor'?filterInvalidDogs.sort((a,b)=> parseInt(a.weight[1]) < b.weight[1]) : state.backupDogs


                return {
                    ...state,
                    allDogs: filter,
                    oneDog: []
                }
                case GET_DETAILS: 


                return {
                    ...state,
                    oneDog: action.payload
                }
         default:
            return state
    }
  

}