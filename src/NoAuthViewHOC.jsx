import React from 'react'
import PropTypes from 'prop-types'

import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import map_bg from './assets/img/map_bg.png'

import { Logo } from 'loft-taxi-mui-theme'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  leftBg: {
    backgroundColor: 'black',
  },
  paper: {
    width: '100%',
    paddingTop: theme.spacing(3) * 2,
    paddingBottom: theme.spacing(3) * 2,
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 500,
      paddingTop: theme.spacing(3) * 2,
      paddingBottom: theme.spacing(3) * 2,
      paddingRight: theme.spacing(5) * 2,
      paddingLeft: theme.spacing(5) * 2,
    },
  },
  hw_100: {
    height: '100%',
    width: '100%',
  },
  rightBg: {
    backgroundImage: `url(${map_bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
  },
}))

const NoAuthViewHOC = (WrappedComponent) => {
  const EnhancedComponent = ({ subTitle, ...rest }) => {
    const classes = useStyles()

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={12} md={3} className={classes.leftBg}>
          <Grid container alignItems={'center'} justify={'center'} className={classes.hw_100}>
            <Logo />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={9} component={Paper} elevation={6} square>
          <Grid container alignItems={'center'} justify={'center'} className={classes.rightBg}>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h5">
                {subTitle}
              </Typography>
              <WrappedComponent {...rest} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  EnhancedComponent.defaultProps = {
    subTitle: 'Sign in',
  }

  EnhancedComponent.propTypes = {
    subTitle: PropTypes.string,
  }

  return EnhancedComponent
}

export default NoAuthViewHOC
