import React, { useState } from 'react'
import {useFetch} from './useFetch'

export const useForm = () => {

    const [search, setSearch] = useState('') 

    

    const handleChange = ({target}) => {
        setSearch(target.value)
        
    }

    


  return {
    handleChange,
    
    search
  }
}
