import React from 'react'

export const Form = ({handleSubmit, handleChange}) => {


  return (
    <>
    <form onSubmit={handleSubmit} className='searchForm'>
        <input
         type='text' name='search' onChange={handleChange} className='inputSearch'
         />
        <input
         type='submit' value='buscar' className='inputSubmit'
         />
    </form>
    </>
  )
}
