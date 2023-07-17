import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/about' exact element={<About/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
          <Route path='/services' exact element={<Services/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
