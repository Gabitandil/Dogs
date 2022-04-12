import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getDogs } from '../../redux/actions'

import Card from '../card/card'

const Home = () => {
  const perros = useSelector(state => state.allDogs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDogs())
  
  }, [])
  
  




    
  return (
    <div>SOY HOME

    {
      perros.length>0?  perros.map(el => {
       return <Card name= {el.name} image = {el.image} temperament = {el.temperament} years = {el.years} id = {el.id} />


      })  :  <p>loading..</p>



    }
      
    
    
    


    </div>
  )
}

export default Home

