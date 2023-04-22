import React from 'react'

const urlBase= 'https://dummyjson.com/products/'


export const consulta =async (url) => {

  try {
    console.log(`${urlBase}${url}`)
    const respuesta = await fetch(`${urlBase}${url}`)

    return respuesta.json()



  } catch (error) {
    throw new Error('Error al cargar la api')
  }

  
}
