import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchName } from '../../redux/actions'





export default function SearchBar() {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')



    function handleInput(e) {
        e.preventDefault()
        setInput(e.target.value)



    }



    

    return (
        <div>searchbar

        <input onChange={e => handleInput(e)} type="text" placeholder='buscar perro'   />
        <button onClick={()  => dispatch(searchName(input))}>buscar</button>

        
        </div>
    )
}
