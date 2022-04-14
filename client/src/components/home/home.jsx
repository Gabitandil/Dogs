import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs, getTemperaments } from '../../redux/actions'
import SearchBar from '../searchbar/searchbar'
import NavBar from '../navbar/navbar'
import Card from '../card/card'
import style from '../home/home.module.css'
const Home = () => {
  const perros = useSelector(state => state.allDogs)
  const perritos = useSelector(state => state.oneDog)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDogs())
    dispatch(getTemperaments())
  }, [])







  return (
    <div className={style.background} >
      <NavBar/>
      


      <div className={style.grid}  >
      {
         
        perros.length > 0 ? perros.map(el => {
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
      </div>
  )
}

export default Home

