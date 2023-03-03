import { GET_DOGS, GET_TEMPERAMENTS, SEARCH_NAME, FILTER_TEMPERAMENTS, FILTER_BREED, ALPHABETICAL_SORT, SORT_WEIGHT, GET_DETAILS, REDUX_PAGENUMBER, CREATE_DOG } from "../../constants/constants";
import axios from "axios";




export  function getDogs (){
  return async function(response){
    const json = await axios.get('http://localhost:3001/')
    return response ({
        type: GET_DOGS,
        payload: json.data


    })
  }
   



}


export function searchName(name){
  return async function(response){
    const jsonName= await axios.get('http://localhost:3001/?name='+ name)
    return response({
      type: SEARCH_NAME,
      payload: jsonName.data
    })
  }



}


export function getTemperaments(){
  return async function (dispatch){
    const json = await axios.get('http://localhost:3001/temperaments')
    return dispatch({
      type: GET_TEMPERAMENTS,
      payload: json.data
    })
  }
}


export function filterTemperaments(payload){
return {
  type: FILTER_TEMPERAMENTS,
  payload
}
}


export function filterBreed(payload){
  return {
    type: FILTER_BREED,
    payload
  }
  }


export function alphabeticalSort(payload){
 return {
   type: ALPHABETICAL_SORT,
   payload
 }


}
export function sortByWeight(payload){
return {
  type: SORT_WEIGHT,
  payload
}

}

export function getDetails(id){
  return async function(dispatch){
    const json = await axios.get('http://localhost:3001/details/'+ id)
    return dispatch({
      type: GET_DETAILS,
      payload: json.data
    })
  }
}

export function setPageNumber(payload){
  return {
    type: REDUX_PAGENUMBER,
    payload
  }
  }

  export function createDog(payload){
    return async function(response){
      const json = await axios.post('http://localhost:3001/create', payload)
      return response
      
    }
  }