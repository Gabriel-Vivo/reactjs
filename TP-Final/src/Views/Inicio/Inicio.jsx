import React from 'react'
import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer'
import "./Inicio.css"

export const Inicio = () => {
  return (
    <div>
        <ItemListContainer/>

       
       
       <p className='text'>Los orígenes de la hamburguesa son inciertos, ya que no se conoce mucho acerca del mismo, sin embargo se sabe que fue elaborada por primera vez en el período que va desde finales del siglo XIX hasta comienzos del XX.La hamburguesa moderna nace de las necesidades culinarias de una sociedad que, por su reciente industrialización, lleva un ritmo de vida más acelerado pero que necesita de un alimento de rápida preparación que aporte los ingredientes necesarios en un solo alimento.</p>
    
      <iframe className='video' width="95%" height="500px" border="7" src="https://www.youtube.com/embed/4hpb5zHlu6A" title="BURGER 🍔 Video Publicitario HAMBURGUESA | BROLL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    
    </div>
  )
}
