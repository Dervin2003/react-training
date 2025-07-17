import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import About from './About';

function TestRoute() {
  return (
    <BrowserRouter>
        <nav>
            <Link to="/">This</Link> | <Link to="/about">About</Link>
        </nav>

        <Routes>
            <Route path="/" element={<TestRoute />} />
            <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

    
  )
}

export default TestRoute;