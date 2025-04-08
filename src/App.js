import React from 'react'
import Navbar from './Component/Navbar'
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import './App.css'
import { Grandhotel } from './Pages/Grandhotel'
const App = () =>{
  return(
    <Router>
      <Navbar />
      <Routes>
      <Route path="/grandhotel" element={<Grandhotel />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  )
}
export default App;