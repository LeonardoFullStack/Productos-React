import React from 'react'

export const Card = ({item}) => {

    
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
    <p>
        {item.description}
    </p>
    <p>
        {item.brand}
    </p>
</div>
</div>
    </>
  )
}
