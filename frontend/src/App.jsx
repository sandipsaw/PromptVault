import React from 'react'
import MainRoute from './routes/MainRoute'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0f172a] relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />

      <Nav />
      <MainRoute />
      
    </div>
    
  )
}

export default App