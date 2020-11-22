import React, { useState } from 'react'

export default ({ router }) => {
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
            onClick={() => router.goTo(route)}
          >
            {route}
          </a>
        )
      })}
    </div>
  )
}
