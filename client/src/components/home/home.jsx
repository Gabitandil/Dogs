import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs } from '../../redux/actions'
import NavBar from '../navbar/navbar'
import Card from '../card/card'
import Paginado from '../paginado/paginado'
import style from '../home/home.module.css'

const Home = () => {
  const perros = useSelector(state => state.allDogs)
  const perritos = useSelector(state => state.oneDog)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDogs())
    
  }, [])
  
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
      {
         
         currentDogs.length > 0 ? currentDogs.map(el => {
          return <Card key={el.id} name={el.name} image={el.image} temperament={el.temperament} years={el.years} id={el.id} weight= {el.weight}/>


        }) :


          perritos === 'no existe la raza' ? <p>el perro no existe</p> :


            perritos.createdInDB == true ?
              <Card key={perritos.id} name={perritos.name} image={perritos.image} temperament={perritos.temperament} years={perritos.years} id={perritos.id} />



              : perritos.length > 0 ? perritos.map(el => {
                return <Card key={el.id} name={el.name} image={el.image} temperament={el.temperament} years={el.years} id={el.id} />


              }) : <p>loading..</p>
 }
          </div>
          <Paginado  dogsPerPage= {dogsPerPage} perros  = {perros.length}  paginado = {paginado}/>
      </div>
  )
}

export default Home

