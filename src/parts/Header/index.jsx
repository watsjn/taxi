import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ router }) => {
  return (
    <div
      style={{
        marginBottom: '1rem',
      }}
    >
      {router.routes.map((route, i) => {
        return (
          <a
            style={{
              marginLeft: '1rem',
            }}
            key={i}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              router.goTo(route)
            }}
          >
            {route}
          </a>
        )
      })}
    </div>
  )
}

Header.propTypes = {
  router: PropTypes.object.isRequired,
}

export default Header
