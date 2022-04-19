import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import NavBar from '../navbar/navbar'
import Card from '../card/card'
import Paginado from '../paginado/paginado'
import style from '../home/home.module.css'

const Home = () => {
  const perros = useSelector(state => state.allDogs)
  

  
  
 const [currentPage, setCurrentpage] = useState(1)
 const [dogsPerPage, setDogsPerPage] = useState(8)
 const indexOfLastDog = currentPage* dogsPerPage
 const indexOfFirstDog = indexOfLastDog - dogsPerPage
 const currentDogs = perros.slice(indexOfFirstDog, indexOfLastDog)
  
 const paginado = (pageNumber) => {
   setCurrentpage(pageNumber)
 }


  return (
    <div className={style.background} >
      <NavBar/>
      


      <div className={style.grid}  >
      { perros === 'no existe la raza' ? <p>el perro no existe</p> :
         
         perros.createdInDB == true ?
         <Card key={perros.id} name={perros.name} image={perros.image} temperament={perros.temperament} years={perros.years} id={perros.id} />
         
         :
         
         currentDogs.length > 0 ? currentDogs.map(el => {
          return <Card key={el.id} name={el.name} image={el.image} temperament={el.temperament} years={el.years} id={el.id} weight= {el.weight}/>
        }) 


          

         : <p>loading..</p>
      }
          </div>
          <Paginado  dogsPerPage= {dogsPerPage} perros  = {perros.length}  paginado = {paginado}/>
      </div>
  )
}

export default Home