import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import User from './components/User'
import Home from './pages/Home' 
import About from './pages/About'
import Navbar from './components/Navbar'
import State from './hooks/State'


const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/state' element={<State />}></Route>
      </Routes>

      <User 
        name="Manoj" 
        department="AIML"
        skills={["HTML","CSS","JS"]}
        projects={["Annual Report Portal", "CareerCompass", "StyleRecommender"]}
      />
    </>
  )
}
export default App
