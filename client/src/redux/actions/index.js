import { GET_DOGS, SEARCH_NAME } from "../../constants/constants";
const axios = require('axios')



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