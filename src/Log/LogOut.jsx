import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext';
import { Navigate } from 'react-router-dom'

export const LogOut = () => {

  const { user, setUser } = useContext(UserContext);

    const logout = () => {
        setUser({});
        
    }

    useEffect(() => {

        logout();
        
    }, [])


  return (
    <Navigate to={'/'} />
  )
}
