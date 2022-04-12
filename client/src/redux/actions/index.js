import { GET_DOGS } from "../../constants/constants";
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