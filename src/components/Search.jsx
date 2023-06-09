import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { Form } from './Form'
import { useFetch } from '../hooks/useFetch'
import { SearchData } from './SearchData'

export const Search = () => {

  const { handleChange, search } = useForm()

  const [searchData, setSearchData] = useState('TTT')

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('submit')
    setSearchData(search)
  }







  return (
    <>
      <div className='gridSearch'>
      <h2>
        Buscar
      </h2>
        <div className='gridSearchForm'>
        <Form handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>


        <SearchData searchData={searchData} />
      </div>

    </>
  )
}
