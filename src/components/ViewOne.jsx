import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export const ViewOne = () => {


    const { id } = useParams();

    const { data, isLoading } = useFetch(id, 'viewOne')

    console.log(data)

    return (
        <>
    {isLoading && <h2>cargando...</h2>}
        <div className='gridContainerOne'>
            <div className='imageOne'>
                <img src={data.image} alt={data.description} />
            </div>
            <h2>
            {data.title}
            </h2>
            <h3>
                {data.price} €
            </h3>
            <div className='contentOne'>
                
            <p>
            <span className='itemData'>
                Producto:
                </span> 
                {data.description}
            </p>
            <div className='contentOne'>
            <p>
               <span className='itemData'>
                Marca:
                </span> 

                {data.brand}

            </p>
            <p>
               <span className='itemData'>
                stock:
                </span> 

                {data.stock}

            </p>
            <p>
               <span className='itemData'>
                Rating:
                </span> 

                {data.rating}

            </p>
            <p>
               <span className='itemData'>
                Categoría:
                </span> 

                {data.category}

            </p>
            </div>
            
            </div>
            
        </div>
        </>
    )
}
