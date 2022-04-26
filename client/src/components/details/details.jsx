import React, { useEffect } from 'react'
import styles from '../details/details.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getDetails, getTemperaments } from '../../redux/actions'
import NavBar from '../navbar/navbar'
import Loading from '../loading/loading'
export default function Details() {
    let { id } = useParams()
    const dogsDetails = useSelector(state => state.oneDog)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDetails(id))
    }, [])


    return (
        <div >
            <NavBar/>
           
            {
                
                Object.keys(dogsDetails).length>0 ? (
                    <div className={styles.border}>

                        <img className={styles.image} src={dogsDetails.image} alt="" />
                        <h1>{dogsDetails.name}</h1>
                        <h4>life span: {dogsDetails.years}</h4>
                        <h4>height : {dogsDetails.height}</h4>
                        <h4>weight:</h4>
                        <h4>{dogsDetails.weight} kg </h4>

                        <Link to= '/home'>
                            <button onClick={() => dispatch(getTemperaments())}>volver</button>
                        </Link>
                        
                        
                    </div>
                    
                ) : <div> <Loading/></div>
                    
                
                



            }


        </div>
    )
}
