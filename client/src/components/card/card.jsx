import React from 'react'
import stylecard from '../card/card.module.css'
export default function card({name, image, temperament, id ,height, weight, years }) {
  return (
    <div className={stylecard.border} >

      <div  >
      <h1>{name}</h1>
      <img   className={stylecard.image} src={image} alt="not found" />
      <h3>{temperament}</h3>
      <h4>life span: {years}</h4>

      </div>

    </div>
  )
}
