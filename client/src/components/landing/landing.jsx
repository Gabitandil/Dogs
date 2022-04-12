import React from 'react'
import {useDispatch} from 'react-redux'
import { getDogs } from '../../redux/actions'






const Landing = () => {
   const  dispatch = useDispatch()
  return (
    <div>
        <p>IM LANDING </p>

        <button onClick={()=> dispatch(getDogs())}>aber </button>



    </div>
  )
}

export default Landing