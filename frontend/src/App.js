import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Regsister from './pages/Regsister'
import Login from './pages/Login'



function App (){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
  
    const user = localStorage.getItem("username");
    setIsLoggedIn(!!user);
  }, []);
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        {/* Redirect to Login if not logged in */}
        <Route path="/" element={isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/regsister" element={<Regsister setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  )
}

export default App
