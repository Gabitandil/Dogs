import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NavBar from '../navbar/navbar'
import { createDog } from '../../redux/actions/index'
import styles from '../createDog/createDog.module.css'



export default function CreateDog() {
   const temperaments = useSelector(state => state.temperaments)
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})
   const [input, setInput] = useState({
    name: "",
    height: "",
    minWeight: "",
    maxWeight:"",
    weight: "",
    years: "",
    image: "",
    temperament: []



   })
   function handleErrors(e){
     setErrors({
       ...input,
       
     })
   }

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
    input.weight = input.minWeight  +'-'+ input.maxWeight
     if(validate(input)== false){
      e.preventDefault()
      
      
     }else{
      dispatch(createDog(input))
      alert("perro creado!!")
     }
     
     
   }


   function validate(input){
     let errors = {}
     if (!input.name ){
       errors.name= ( 'no ingreso el nombre ')
       alert('no ingreso el nombre!')
       return false 
      
     }
     if (!input.height ){
      alert('no ingreso el height!')
      console.log('aber', errors.name)
      return false 
     
    }
    if(isNaN(input.height)){
      errors.name= ('el height debe ser un numero')
      alert('height debe ser un numero ')
      return false
    }
    if (!input.minWeight ){
      alert('no ingreso el min weight!')
      
      return false 
     
    }
    if(isNaN(input.minWeight)){
     
      alert(' min weight debe ser un numero ')
      return false
    }
    if (!input.maxWeight ){
      alert('no ingreso el max weight!')
      
      return false 
     
    }
    if(isNaN(input.maxWeight)){
     
      alert(' max weight debe ser un numero ')
      return false
    }
    if (!input.years ){
      alert('no ingreso el life span !')
      
      return false 
     
    }
    if(isNaN(input.years)){
     
      alert(' life span debe ser un numero ')
      return false
    }
 
  }
  return (
    <div className={styles.background}>
      <NavBar/>
      <div className={styles.center}>
        
        <label>raza</label>
        <input type="text" placeholder='ingresa raza' onChange={(e) => handleInput(e)}
        value={input.name} 
        
        name= "name"
        />
        </div>


        <div className={styles.center}>
        <label >min weight</label>
        <input type="text" placeholder='ingresa  weight' min="0" onChange={(e) => handleInput(e)}
        value={input.minWeight}
        name = "minWeight"
        />
        </div>

        <div className={styles.center}>
        <label >max weight</label>
        <input type="text" placeholder='ingresa  weight' min="0" onChange={(e) => handleInput(e)}
        value={input.maxWeight}
        name = "maxWeight"
        />
        </div>

        <div className={styles.center}>
        <label >height</label>
        <input type="text" placeholder='ingresa  height' min="0" onChange={(e) => handleInput(e)}
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
        <input type="text" placeholder='ingresa life span' min="0" onChange={(e) => handleInput(e)}
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
