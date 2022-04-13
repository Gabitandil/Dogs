import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getDogs } from '../../redux/actions'
import SearchBar from '../searchbar/searchbar'
import Card from '../card/card'

const Home = () => {
  const perros = useSelector(state => state.allDogs)
  const perritos = useSelector (state => state.oneDog)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDogs())
  
  }, [])
  
  




    
  return (
    <div>SOY HOME
      <SearchBar/>
    {
      perros.length>0?  perros.map(el => {
       return <Card key={el.id} name= {el.name} image = {el.image} temperament = {el.temperament} years = {el.years} id = {el.id} />


      }) : 
      
      
      perritos=='no existe la raza'?  <p>el perro no existe</p>
       
        
         
     
      
      
    
      
      : perritos.length>0?  perritos.map(el => {
        return <Card key={el.id} name= {el.name} image = {el.image} temperament = {el.temperament} years = {el.years} id = {el.id} />
 
 
       }) 
      
      
      
      
       :  <p>loading..</p>
      
     



    }
      
    
    
    


    </div>
  )
}

export default Home

