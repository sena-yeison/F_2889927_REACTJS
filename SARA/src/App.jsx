import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/layout'
import Contacts from './pages/contacts'
import Services from './pages/services'
import Error404 from './pages/404'
import Home from './pages/home'
import Login from './auth/login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}>
          
          <Route path='/' element={<Home/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='*' element={<Error404/>}/>
          
        </Route>
      </Routes>
    </>
  )
}

export default App
