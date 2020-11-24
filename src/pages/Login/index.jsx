import React, { useState } from 'react'

const Login = ({ router }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = () => {
    router.goTo('map')
  }

  return (
    <>
      <h1>LOGIN</h1>
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
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label style={{ marginBottom: '1rem' }}>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div style={{ marginBottom: '1rem' }}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  )
}

export default Login
