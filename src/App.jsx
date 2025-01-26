import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Missing from './components/Missing'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Redirect root to Home */}
        <Route index element={<Navigate to="/home" />} />

        {/* public routes */}
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='contact' element={<Contact/>}/>
        
        {/* Catch All */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
