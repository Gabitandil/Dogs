import React from 'react'
import { Link } from 'react-router-dom'
import style from '../landing/landing.module.css'
import image from './img/img1.jpg'



const LandingPage = () => {

    return (
        <div className={style.background} >
            <h1 className={style.text}>PROYECTO  DOGS</h1>
            
            <Link to ='/home'>
                <button className={style.button} > ingresar </button>

            </Link>
           


        </div>
    )
}

export default LandingPage