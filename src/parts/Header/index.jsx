import React, { useState } from 'react'

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

export default Header
