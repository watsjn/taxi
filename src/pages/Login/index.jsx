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

function SignUp({ router }) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Don't have an account?"}
      <Link color="inherit" onClick={() => router.goTo('registration')}>
        {' '}
        Sign up
      </Link>
    </Typography>
  )
}

SignUp.propTypes = {
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

const Login = ({ router }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = useContext(AuthContext)

  const classes = useStyles()

  const onSubmit = (e) => {
    e.preventDefault()

    auth.login(email, password).then(() => {
      router.goTo('map')
    })
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
        Sign In
      </Button>
      <Box mt={5}>
        <SignUp router={router} />
      </Box>
    </form>
  )
}

Login.propTypes = {
  router: PropTypes.object.isRequired,
}

export default NoAuthViewHOC(Login)
