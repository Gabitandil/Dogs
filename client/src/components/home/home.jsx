import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getDogs } from '../../redux/actions'
const Home = () => {
    const dispatch = useDispatch()
  return (
    <div>SOY HOME

    <button onClick={() => dispatch(getDogs())}> aber</button>



    </div>
  )
}

export default Home