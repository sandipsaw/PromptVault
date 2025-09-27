import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Create from '../pages/Create'
import Feature from '../pages/Feature'
import Community from '../pages/Community'
import Export from '../pages/Export'
import Profile from '../pages/Profile'
import Personal from '../pages/Personal'

const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/create-prompt' element={<Create />} />
      <Route path='/personal-prompt' element={<Personal />} />
      <Route path='/community-prompt' element={<Community />} />
      <Route path='/feature' element={<Feature />} />
      <Route path='/export-store' element={<Export />} /> 
      <Route path='profile_and_setting' element={<Profile />} />
    </Routes>
  )
}

export default MainRoute