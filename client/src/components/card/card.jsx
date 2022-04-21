import React from 'react'
import { Link } from 'react-router-dom'
import stylecard from '../card/card.module.css'
export default function card({name, image, temperament, id ,height, weight, years }) {
  return (
   <div>

    <div className={stylecard.border} >
    <Link to ={`/details/${id}`} style={{textDecoration: 'inherit', color : 'inherit'}}>
      <div  >
      <img   className={stylecard.image} src={image} alt="not found" />
      <h1>{name}</h1>
      <h3>{temperament}</h3>
      <h4>life span: {years}</h4>
      <h4>weight:</h4>
      <h4>{weight.join(',')} kg </h4>
      </div>
      </Link>
    </div>
    </div>
  )
}
