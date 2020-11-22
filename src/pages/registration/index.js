import React, { useState } from 'react'

export default ({ router }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = () => {
    router.goTo('map')
  }

  return (
    <>
      <h1>REGISTRATION</h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        onSubmit={onSubmit}
      >
        <label style={{ marginBottom: '1rem' }}>
          Email:
          <input type="email" value={email} onChange={setEmail} />
        </label>
        <label style={{ marginBottom: '1rem' }}>
          Name:
          <input type="name" value={name} onChange={setName} />
        </label>
        <label style={{ marginBottom: '1rem' }}>
          Password:
          <input type="password" value={password} onChange={setPassword} />
        </label>
        <div style={{ marginBottom: '1rem' }}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  )
}
