
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import NoPage from './Pages/NoPage'
function App() {
  return (
    <Routes>
      
    
      <Route path='/' element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
    
  </Routes>
  )
}

export default App