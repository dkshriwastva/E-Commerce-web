import React  from 'react'
import Navbar from "./Component/Navbar";
 //import Home from "./Component/Home";
//import Card from "./Component/Card";
//import './App.css'
import { Outlet } from 'react-router-dom';
function App() {
  

  return (
    <>
      
  <Navbar></Navbar>
  <Outlet></Outlet>
  
      
      
    </>
  )
}

export default App
