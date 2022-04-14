import React from 'react'
import SearchBar from '../searchbar/searchbar'
import styleNavbar from '../navbar/navbar.module.css'
import { useSelector } from 'react-redux'
 
export default function Navbar() {
  const temperaments = useSelector(state => state.temperaments)
 
  return (
     
    <div>
         <SearchBar/> 
        <div className={styleNavbar.test}  >
        
            <select name='select1'>
            <option value="todos">temperaments</option>
            {temperaments.map(option => (

              <option value={option}>{option}</option>

            ))}

          </select>
       
       


        </div>



    </div>
  )
}
