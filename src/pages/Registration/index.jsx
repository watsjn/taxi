import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import AuthContext from '../../AuthContext'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import NoAuthViewHOC from '../../NoAuthViewHOC'

function SignIn({ router }) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Already have an account?'}
      <Link color="inherit" onClick={() => router.goTo('login')}>
        {' '}
        Sign in
      </Link>
    </Typography>
  )
}

SignIn.propTypes = {
  router: PropTypes.object.isRequired,
}

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Registration = ({ router }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const classes = useStyles()

  const onSubmit = () => {
    router.goTo('map')
  }

  return (
    <form className={classes.form} noValidate onSubmit={(e) => onSubmit(e)}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
        autoFocus
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign Up
      </Button>
      <Box mt={5}>
        <SignIn router={router} />
      </Box>
    </form>
  )
}

export default NoAuthViewHOC(Registration)
