import React, { useState } from 'react'
import Header from './parts/header'
import Login from './pages/login'
import Map from './pages/map'
import Profile from './pages/profile'
import Registration from './pages/registration'

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
