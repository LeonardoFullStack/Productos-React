import { useState } from 'react'


import { UserProvider } from './contexts/UserProvider'
import { Router } from './routers/Router'




function App() {
  

  return (
    <>
    <header>
      <p>Práctica Dummy JSON React</p>
    </header>
    
    <UserProvider>

      <main>

        <Router />

      </main>
    </UserProvider>
    
    <footer>
      <p>Práctica Dummy JSON React</p>
    </footer>
  </>
  )
}

export default App
