import React from 'react'
import stylecard from '../card/card.module.css'
export default function card({name, image, temperament, id ,height, weight, years }) {
  return (
   <div>

    <div className={stylecard.border} >

      <div  >
      <img   className={stylecard.image} src={image} alt="not found" />
      <h1>{name}</h1>
      <h3>{temperament}</h3>
      <h4>life span: {years}</h4>
      <h4>weight:</h4>
      <h4>{weight} kg </h4>
      </div>

    </div>
    </div>
  )
}
