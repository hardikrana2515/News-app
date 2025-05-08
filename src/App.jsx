
import './App.css'
import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import About from './components/About'
import Navbar from './components/navbar'
import News from './components/News'
 
 const App = (props) => {

     return (
      <Router>
        <div>
          <Navbar/>
          <Routes>
          <Route exact path="/" element={<News key="general"category="general" country="us" pageSize="12" />} />
          <Route exact path="/business" element={<News key="business" category="business" country="us" pageSize="12"/>} />
          <Route exact path="/entertainment" element={<News key="entertainment"category="entertainment" country="us" pageSize="12"/>} />
          <Route exact path="/health" element={<News key="health"category="health" country="us" pageSize="12" />} />
          <Route exact path="/science" element={<News key="science"category="science" country="us" pageSize="12"/>} />
          <Route exact path="/sports" element={<News key="sports"category="sports" country="us" pageSize="12"/>} />
          <Route exact path="/technology" element={<News key="technology" category="technology" country="us" pageSize="12"/>} />
          <Route exact key=""path="/about" element={<About key="about"/>} />
          </Routes>
        </div>
      </Router>
     )
   }

   export default App
 
 

