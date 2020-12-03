import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AuthContext from './AuthContext'

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <AuthContext.Provider
      value={{
        login: function (email, password) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              setIsLoggedIn(true)
              resolve(true)
            }, 1000)
          })
        },
        logout: () => setIsLoggedIn(false),
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.any.isRequired,
}

export default AuthProvider
