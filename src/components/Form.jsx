import React from 'react'

export const Form = ({handleSubmit, handleChange}) => {


  return (
    <>
    <form onSubmit={handleSubmit} className='searchForm'>
        <input
         type='text' name='search' onChange={handleChange}
         />
        <input
         type='submit' value='buscar'
         />
    </form>
    </>
  )
}
