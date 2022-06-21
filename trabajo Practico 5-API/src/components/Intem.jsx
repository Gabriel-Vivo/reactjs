import React from 'react'
 import "./items.css"


		

//el componente Item arma las cards, que recibe por props  del componente ItemList

export const Intem = ({description,img,name}) => {




  return (
    <div className='cartas'>
        <h1>{name}</h1>
        <img src={img} alt={name} />
        <h3>{description}</h3>

    </div>
  )
}
