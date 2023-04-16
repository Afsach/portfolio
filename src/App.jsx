import React, {useState, useEffect} from 'react'
import './App';
import Navbar from './Components/Navbar/Navbar';
import { About, Qualification, Home, Work, Skills } from './pages/index';


const App = () => {

  const [title, setTitle] = useState("Afsarjahan Ansari's Portfolio");
  useEffect(()=>{
    
  },[title])

  return (
    <>
    <Navbar setTitle={setTitle} />
    <Home/>
    <About/>
    <Qualification/>
    <Skills/>
    <Work/>
    </>
  )
}

export default App;
