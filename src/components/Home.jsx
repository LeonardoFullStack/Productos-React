import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home = () => {


    return (

        <>

            <h4 className='titleCenter'>
                Home
            </h4>
            <div className='gridContainer'>
                <NavLink to='/smartphones' className='navLink'>
                    <div className='card'>

                        <div className='image'>
                            <img src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" alt="Phone photo" />
                        </div>
                        <div className='content'>
                            <h4>
                                smartphones
                            </h4>
                        </div>
                    </div>
                </NavLink>
                <NavLink to='/motorcycles' className='navLink'>
                    <div className='card'>

                        <div className='image'>
                            <img src="https://i.dummyjson.com/data/products/93/thumbnail.jpg" alt="Phone photo" />
                        </div>
                        <div className='content'>
                            <h4>
                                Motocicletas
                            </h4>

                        </div>
                    </div>
                </NavLink>
            </div></>
    )
}
