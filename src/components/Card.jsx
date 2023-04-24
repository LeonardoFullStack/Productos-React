import React from 'react'
import { NavLink } from 'react-router-dom'

export const Card = ({item}) => {

    const  linkId = `/viewOne/${item.id}`
  return (
    <>
    <div className='card'>

<div className='image'>
    <img src={item.image} alt={item.description} />
</div>
<div className='content'>
    <h6>
        {item.title}
    </h6>
    <h5>
        {item.price} €
    </h5>

    <NavLink to={linkId} className='navLink' 
          
        >
        <button className='info'>
            Más info
        </button>
        </NavLink>

</div>
</div>
    </>
  )
}
