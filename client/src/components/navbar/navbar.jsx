import React from 'react'
import SearchBar from '../searchbar/searchbar'
import styleNavbar from '../navbar/navbar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { filterTemperaments, filterBreed, alphabeticalSort } from '../../redux/actions'
export default function Navbar() {
  const dispatch = useDispatch()
  const temperaments = useSelector(state => state.temperaments)
  const perritos = useSelector(state => state.backupDogs)
  function handleFilterTemperament(e) {
    dispatch(filterTemperaments(e.target.value))
  }

 function handleFilterBreed(e){
 dispatch(filterBreed(e.target.value))
 }


 function handleAlphabeticalSort(e){
   dispatch(alphabeticalSort(e.target.value))
 }

  return (

    <div>
      <SearchBar />
      <div className={styleNavbar.position}  >

        <select onChange={(e) => handleFilterTemperament(e)} name='select1'>
          <option value="todos">todos</option>
          {temperaments.map(option => (

            <option key={option} value={option}>{option}</option>

          ))}

        </select>

        <div className={styleNavbar.filterBreeds}>

          <select onChange={(e)=> handleFilterBreed(e)} name="select2">
            <option value="">razas</option>
            {perritos.map(option => (

              <option key={option.name} value={option.name}>{option.name}</option>

            ))}
          </select>

              <div className={styleNavbar.test}>

               <select  onChange = {(e) => handleAlphabeticalSort(e) }>
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
              </select>

              </div>

        </div>


      </div>



    </div>
  )
}
