import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageNumber } from '../../redux/actions/index'
import NavBar from '../navbar/navbar'
import Card from '../card/card'
import Paginado from '../paginado/paginado'
import style from '../home/home.module.css'
import Loading from '../loading/loading'

const Home = ({page}) => {
  const dispatch = useDispatch()
  const perros = useSelector(state => state.allDogs)
  const pageRedux = useSelector(state => state.pagenumber)

  
  

 const [dogsPerPage, setDogsPerPage] = useState(8)
 const indexOfLastDog = pageRedux* dogsPerPage
 const indexOfFirstDog = indexOfLastDog - dogsPerPage
 const currentDogs = perros.slice(indexOfFirstDog, indexOfLastDog)
  
 const paginado = (pageNumber) => {
   dispatch(setPageNumber(pageNumber))
 }
 function noDogs(){
   
  return <h4 className={style.noDogs} >no se encuentra el perro </h4>
  
 }

  return (
    <div className={style.background} >
      <NavBar/>
      


      <div className={style.grid}  >
      { perros === "no existe la raza" ?   noDogs()
         :
         perros.createdInDB == true ?
         <Card key={perros.id} name={perros.name} image={perros.image} temperament={perros.temperament} years={perros.years} id={perros.id} />
         
         :
         
         currentDogs.length > 0 ? currentDogs.map(el => {
          return <Card key={el.id} name={el.name} image={el.image} temperament={el.temperament} years={el.years} id={el.id} weight= {el.weight}/>
        }) 


        :<div className={style.loading}> <Loading/> </div>
          

      }
      </div> 
          <Paginado  dogsPerPage= {dogsPerPage} perros  = {perros!=="no existe la raza"? perros.length : 0}  paginado = {paginado}/>
      </div>
  )
}

export default Home