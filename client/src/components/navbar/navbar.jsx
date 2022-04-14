import React from 'react'
import SearchBar from '../searchbar/searchbar'
import styleNavbar from '../navbar/navbar.module.css'
export default function Navbar() {
  return (
     
    <div>
         <SearchBar/> 
        <div className={styleNavbar.test}  >
        
     <select  name='select1' >
  <option value="todos" >temperament</option>
  <option value="normal">normal</option>
  <option value="flying">flying</option>
  <option value="poison">poison</option>
  <option value="ground">ground</option>
  <option value="bug">bug</option>
  <option value="fire">fire</option>
  <option value="water">water</option>
  <option value="grass">grass</option>
  <option value="electric">electric</option>
  <option value="fairy">fairy</option>
</select>


        </div>



    </div>
  )
}
