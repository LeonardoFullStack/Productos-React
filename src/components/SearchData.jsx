import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { Card } from './Card'

export const SearchData = ({ searchData }) => {

    

    
        const {data: motoData} = useFetch('category/motorcycle')
        const { data: phoneData } = useFetch('category/smartphones')
        const fullData = [...phoneData, ...motoData]
        const getSearch = fullData.filter((item) => item.title.toLowerCase().includes(searchData.toLowerCase()))

    
    


    return (
        <>
        <div className='gridContainer'>
            {getSearch.map((item) => (
                <Card item={item} key={item.id} />
            ))}
        </div>
        </>
        )
}
