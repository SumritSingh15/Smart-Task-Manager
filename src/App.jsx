import React from 'react'
import Header from './Header'
import Body from './Body'

const App = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      
      {/* Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="w-72 h-72 bg-purple-600/20 rounded-full blur-3xl absolute top-16 left-10"></div>
        <div className="w-72 h-72 bg-blue-500/20 rounded-full blur-3xl absolute bottom-10 right-10"></div>
      </div>

      <Header />
      <Body />
    </div>
  )
}

export default App
