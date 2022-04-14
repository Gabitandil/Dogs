import React from 'react'
import SearchBar from '../searchbar/searchbar'
import styleNavbar from '../navbar/navbar.module.css'
import { useSelector } from 'react-redux'
 
export default function Navbar() {
  const temperaments = useSelector(state => state.temperaments)
 
  function handleFilterTemperament(e){
    console.log('handlefilter', e.target.value)
  }


  return (
     
    <div>
         <SearchBar/> 
        <div className={styleNavbar.test}  >
        
            <select onChange={(e)=> handleFilterTemperament(e)} name='select1'>
            <option value="todos">temperaments</option>
            {temperaments.map(option => (

              <option key={option} value={option}>{option}</option>

            ))}

          </select>
       
       


        </div>



    </div>
  )
}
