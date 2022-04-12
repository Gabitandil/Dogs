import React from 'react'

export default function card({name, image, temperament, id ,height, weight, years }) {
  return (
    <div>

      <h1>{name}</h1>
      <img src={image} alt="not found" />
      <h3>{temperament}</h3>
      <h4>life span: {years}</h4>



    </div>
  )
}
