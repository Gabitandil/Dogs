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
                
               
                console.log('action payload', action.payload)
                const dogsBeforeFilter = state.backupDogs

                let prueba = dogsBeforeFilter.map(el => el.temperament ).join(', ')
                console.log('prueba', prueba)
                const filterByTemperament = action.payload ==='todos'?  'hola todos' : prueba.includes(action.payload)? 'siii' : 'noooo'


                return {
                    ...state,
                    allDogs: filterByTemperament,
                    oneDog: []
                }    
         default:
            return state
    }
  

}