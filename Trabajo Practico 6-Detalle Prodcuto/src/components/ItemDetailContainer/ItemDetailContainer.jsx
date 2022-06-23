import React, { useEffect, useState } from 'react'
import { getProductById } from "../asyncmock"
import { ItemDetail } from '../iItemDetail/ItemDetail'


export const ItemDetailContainer = () => {


    const [item, setItem] = useState([])

 


    const id = 2

    useEffect(() => {
        getProductById(id)//aqui le paso el por parametro el id que neceito que me traiga del array !!!
            .then(res => setItem(res))// aqui le paso por parametro el prodcuto que me trajo segun el id que le pasamos en a liena anterior 
            .catch(err => console.log(err))
    }, [])

    //console.log("item:", item)


  return (

 <div>
    <h1>Item Detail</h1>

    <ItemDetail img={item.img} name={item.name} description={item.description}/> {/* aqui llamo el componente ItemDetail que es el componente donde armo la card , */}
                                                                                 {/* y le paso  por props la variable item que ya tiene el producto con su respectivo id */}
     
   </div>

    
  )
}
