import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const userTemplate = {

        name: 'paco'
    }

    const handlerSubmit = (ev) => {

        setUser(userTemplate)
        navigate('/home');
    }


    return (
        <>
        <h2>
                    Login para Comenzar
                </h2>
            <div className='loginBox'>
               

                <form id="formLogin" onSubmit={handlerSubmit}>



                    <input
                        type='submit'
                        value='Login'
                    />
                </form>
                </div>
        </>
    )
}
