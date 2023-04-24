import { Route, Routes, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { NavBar } from '../NavBar/NavBar'
import { Login } from '../Log/Login'
import { LogOut } from '../Log/LogOut'
import { Home } from '../components/Home'
import { SmartPhones } from '../components/SmartPhones'
import { Motorcycles } from '../components/Motorcycles'
import { Search } from '../components/Search'
import { ViewOne } from '../components/ViewOne'



export const Router = () => {

    const { user, setUser } = useContext(UserContext);

    

    return (
        <>
            <NavBar />
            
            <Routes>
                <Route path='/' element={<Login />} />
                {user.name &&
                    <>
                        
                        <Route path='home' element={<Home />} />
                        <Route path='smartphones' element={<SmartPhones />} />
                        <Route path='motorcycles' element={<Motorcycles />} />
                        <Route path='search' element={<Search />} />
                        <Route path='viewOne/:id' element={<ViewOne />} />
    
                        
                        <Route path='logout' element={<LogOut />} />

                    </>}
                <Route path='/*' element={<Navigate to={'/'} />} />
            </Routes>
            
        </>
    )
}