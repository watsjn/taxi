import React, { useState } from 'react'
import Header from './parts/Header'
import Login from './pages/Login'
import Map from './pages/Map'
import Profile from './pages/Profile'
import Registration from './pages/Registration'

function App() {
  const [currentRoute, setCurrentRoute] = useState('login')

  const renderRoute = (route) => {
    switch (route) {
      case 'login':
        return <Login router={router} />
      case 'map':
        return <Map router={router} />
      case 'profile':
        return <Profile router={router} />
      case 'registration':
        return <Registration router={router} />
      default:
        return <Login router={router} />
    }
  }

  const router = {
    goTo: (route) => {
      setCurrentRoute(route)
    },
    routes: ['login', 'map', 'profile', 'registration'],
  }

  return (
    <>
      <Header router={router} />
      {renderRoute(currentRoute)}
    </>
  )
}

export default App
