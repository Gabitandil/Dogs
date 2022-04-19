import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { searchName } from '../../redux/actions'
import styleBar from '../searchbar/searchbar.module.css'




export default function SearchBar() {
    let navigate = useNavigate()
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
        setTimeout(() => {
            navigate('/home')
        }, 2000);
        
    }



    return (
        <div className={styleBar.hola}>
           
            <form>
                <input onChange={e => handleInput(e)} type="text" placeholder='buscar por raza' value={input} />
                <button onClick={e => handleSubmit(e)}  >buscar </button>
            </form>
               
                   
               
        </div>
    )
}
