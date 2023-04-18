import React from 'react'
import './App';
import Navbar from './Components/Navbar/Navbar';
import { About, Qualification, Home, Work, Skills } from './pages/index';


const App = () => {

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Qualification/>
    <Skills/>
    <Work/>
    </>
  )
}

export default App;
