import React from 'react'
import HeroSection from './components/HeroSection'
import NavbarPage from './components/NavbarPage'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/project' element={<Projects/>} />

   </Routes>

  )
}

export default App