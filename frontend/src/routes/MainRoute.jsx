import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Create from '../pages/Create'
import Feature from '../pages/Feature'
import Community from '../pages/Community'
import Export from '../pages/Export'
import Profile from '../pages/Profile'
import Personal from '../pages/Personal'
import Register from '../pages/Register'
import Login from '../pages/Login'

const MainRoute = () => {
  return (
    <Routes>
      <Route path='/sign-up' element={<LandingPage />} />
      <Route path='/create-prompt' element={<Create />} />
      <Route path='/personal-prompt' element={<Personal />} />
      <Route path='/community-prompt' element={<Community />} />
      <Route path='/feature' element={<Feature />} />
      <Route path='/export-store' element={<Export />} /> 
      <Route path='profile_and_setting' element={<Profile />} />
      <Route path='/sign-up/register' element={<Register />} />
      <Route path='/sign-up/login' element={<Login />} />
    </Routes>
  )
}

export default MainRoute