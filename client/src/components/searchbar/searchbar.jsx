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

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(searchName(input))
        setInput('')
    }



    return (
        <div>
            <form>
                <input onChange={e => handleInput(e)} type="text" placeholder='buscar perro' value={input} />
                <button onClick={e => handleSubmit(e)}  >buscar </button>
            </form>

        </div>
    )
}
