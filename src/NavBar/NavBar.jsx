import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext';
import { NavLink } from 'react-router-dom'

export const NavBar = () => {

  const { user, setUser } = useContext(UserContext);

  console.log(user.name)

  return (
    <nav>
      {user.name && <>

        <NavLink to='/logout' className='navLink'
          
        >Logout
        </NavLink>

        <NavLink to='/smartphones' className='navLink'
          
        >Smartphones
        </NavLink>

        <NavLink to='/motorcycles' className='navLink'
          
        >Motocicletas
        </NavLink>

        <NavLink to='/search' className='navLink'
          
        >Buscar
        </NavLink>
        
        </>

        }
    </nav>
  )
}
