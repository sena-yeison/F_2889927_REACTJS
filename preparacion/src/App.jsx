import { useState } from 'react'
import './App.css'
import Header from './components/layouts/layout'
import { UserLoginContext } from './components/context/userLoginContext'

function App() {
  return (
    <UserLoginContext>
      <Header/>
    </UserLoginContext>
  )
}

export default App
