import { useState } from 'react'
import './App.css'
import Header from './components/layouts/layout'
import { UserLoginContext } from './components/context/userLoginContext'

function App() {
  return (
    <div className='contenedor'>
    <UserLoginContext>
      <Header/>
    </UserLoginContext>
    </div>
  )
}

export default App
