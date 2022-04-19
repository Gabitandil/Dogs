import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getDetails } from '../../redux/actions'
export default function Details() {
 let {id} = useParams()
 const dogsDetails = useSelector(state => state.oneDog)
 const dispatch = useDispatch()
 useEffect(() => {
   dispatch(getDetails(id))
 }, [dispatch])
 
console.log('holaa', dogsDetails.name)
  return (
    <div>
        
        {
         dogsDetails? (
             <div>
                 
                <p>{dogsDetails.name}</p>
                <img src={dogsDetails.image} alt="" />



            </div>

         ) 
          : <p>loading</p>   





        }
        

    </div>
  )
}
