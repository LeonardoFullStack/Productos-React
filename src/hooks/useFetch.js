import React, { useEffect, useState } from 'react'

import { getDataEdited } from '../helpers/getDataEdited'

export const useFetch = (url) => {

    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getData = async()=>{

        const data = await getDataEdited(url)
        setData(data)
        setisLoading(false)
        
        
    }

    useEffect(()=> {
        getData()
        
    },[])

  return {
    data,
    isLoading
  }
}
