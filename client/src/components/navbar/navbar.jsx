import React from 'react'
import SearchBar from '../searchbar/searchbar'
import styleNavbar from '../navbar/navbar.module.css'
import { useDispatch, useSelector } from 'react-redux'
 import { filterTemperaments } from '../../redux/actions'
export default function Navbar() {
  const dispatch = useDispatch()
  const temperaments = useSelector(state => state.temperaments)
 
  function handleFilterTemperament(e){
    console.log('handlefilter', e.target.value)
    dispatch(filterTemperaments(e.target.value))
  }


  return (
     
    <div>
         <SearchBar/> 
        <div className={styleNavbar.test}  >
        
            <select onChange={(e)=> handleFilterTemperament(e)} name='select1'>
            <option value="todos">todos</option>
            {temperaments.map(option => (

              <option key={option} value={option}>{option}</option>

            ))}

          </select>
       
       


        </div>



    </div>
  )
}
