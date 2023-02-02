import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Hotel from './pages/Hotel/Hotel'
import List from './pages/List/List'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels' element={<List />} />
          <Route path='/hotels/:id' element={<Hotel />} /> 
        </Routes>
    </div>
  )
}

export default App