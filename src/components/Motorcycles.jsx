import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { Card } from './Card'

export const Motorcycles = () => {

    const {data, isLoading} = useFetch('category/motorcycle')
    
    
    return (

    <>
    {isLoading && 
    
         <h2>
        Cargando ...
        </h2>}


    <div className='gridContainer'>
    {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
    </>
  )
    }
