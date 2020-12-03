import React, { useContext } from 'react'
import Login from './pages/Login'
import PropTypes from 'prop-types'
import AuthContext from './AuthContext'

const AuthHOC = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    const auth = useContext(AuthContext)

    return !auth.isLoggedIn ? <Login {...props} /> : <WrappedComponent {...props} />
  }

  EnhancedComponent.propTypes = {
    router: PropTypes.object.isRequired,
  }

  EnhancedComponent.displayName = 'authHOC'

  return EnhancedComponent
}

export default AuthHOC
