import React, { useState } from 'react'
import * as R from 'ramda'
import AuthProvider from './AuthProvider'
import Login from './pages/Login'
import Map from './pages/Map'
import Profile from './pages/Profile'
import Registration from './pages/Registration'
import AuthHOC from './AuthHOC'

const EnhancedMap = R.compose(AuthHOC)(Map)
const EnhancedProfile = R.compose(AuthHOC)(Profile)

function App() {
  const [currentRoute, setCurrentRoute] = useState('map')

  const renderRoute = (route) => {
    switch (route) {
      case 'login':
        return <Login router={router} />
      case 'map':
        return <Map router={router} />
      case 'profile':
        return <EnhancedProfile router={router} />
      case 'registration':
        return <Registration subTitle={'Sing up'} router={router} />
      default:
        return <Login router={router} />
    }
  }

  const router = {
    goTo: (route) => {
      setCurrentRoute(route)
    },
    routes: ['map', 'profile', 'registration'],
  }

  return <AuthProvider>{renderRoute(currentRoute)}</AuthProvider>
}

export default App
