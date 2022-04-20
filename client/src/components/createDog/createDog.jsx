import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NavBar from '../navbar/navbar'
import { createDog } from '../../redux/actions/index'
import styles from '../createDog/createDog.module.css'
export default function CreateDog() {
   const temperaments = useSelector(state => state.temperaments)
    const dispatch = useDispatch()
   const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    years: "",
    image: "",
    temperament: []



   })

   function handleInput(e){
     setInput({
       ...input,
       [e.target.name] : e.target.value
       
     })

   }

   function handleSelect(e){
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value]
    })

   }

   function handleSubmit(e){
     e.preventDefault()
     console.log('submit')
     dispatch(createDog(input))
   }

  return (
    <div className={styles.background}>
      <NavBar/>
      <div className={styles.center}>
        <p>UNDER CONSTRUCTION</p>
        <label>raza</label>
        <input type="text" placeholder='ingresa raza' onChange={(e) => handleInput(e)}
        value={input.name}
        name= "name"
        />
        </div>


        <div className={styles.center}>
        <label >weight</label>
        <input type="number" placeholder='ingresa  weight' min="0" onChange={(e) => handleInput(e)}
        value={input.weight}
        name = "weight"
        />
        </div>

       

        <div className={styles.center}>
        <label >height</label>
        <input type="number" placeholder='ingresa  height' min="0" onChange={(e) => handleInput(e)}
          value={input.height}
          name = "height"
        />
        </div>

        
        <div className={styles.center}>
        <label >image</label>
        <input type="text" placeholder='ingresa image' onChange={(e) => handleInput(e)}
         value={input.image}
         name= "image"
        />
        </div>

        <div className={styles.center}>
        <label >life span</label>
        <input type="number" placeholder='ingresa life span' min="0" onChange={(e) => handleInput(e)}
        value={input.years}
        name="years"
        />
        </div>
      
        <select className={styles.select} name="select1" onChange={(e)=> handleSelect(e)}>
        <option value="">temperamentos</option>
        {temperaments.map(temp => (
          <option key={temp} value={temp} >{temp}</option>
        ))

        }

        </select>
        {console.log('inpute', input)}
        <ul className={styles.center}>  {input.temperament.map(el => el+ ",")} </ul>
        <button className={styles.submit} onClick={(e) => handleSubmit(e)}>Crear Perro!</button>
      <Link to='/home'> <button  className={styles.button}>Volver</button></Link>

    </div>
  )
}
