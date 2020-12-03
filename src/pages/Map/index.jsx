import React, { useEffect, useRef } from 'react'
import Header from '../../parts/Header'
import mapboxgl from 'mapbox-gl'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import StarIcon from '@material-ui/icons/StarBorder'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { Logo } from 'loft-taxi-mui-theme'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    backgroundColor: 'black',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: 'white',
  },
  content: {
    height: '100%',
    width: '100%',
  },
}))

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWxpYWtzZWkxMjMiLCJhIjoiY2tpNTBuN2llMDA4ODMwbXFrZDRzYjB1eiJ9.cMu65AzDrTw3yvVFhw1ckw'

const Map = () => {
  const mapRef = useRef(null)
  let map

  const classes = useStyles()

  useEffect(() => {
    map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v9',
    })

    return () => {
      map.remove()
    }
  }, [])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarTitle}>
            <Logo />
          </div>
          <nav>
            <Link href="#" className={classes.link}>
              Features
            </Link>
            <Link href="#" className={classes.link}>
              Enterprise
            </Link>
            <Link href="#" className={classes.link}>
              Support
            </Link>
            <Link href="#" className={classes.link}>
              Sign out
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      {/* <Container
        maxWidth="lg"
        component="main"
        className={classes.heroContent}
      ></Container> */}
      {/* End hero unit */}
      <Grid container component="main" className={classes.content}>
        <Grid item xs={12} ref={mapRef}></Grid>
      </Grid>
    </div>

    // <div
    //   style={{
    //     position: 'absolute',
    //     top: 0,
    //     bottom: 0,
    //     width: '100%',
    //   }}
    //   ref={mapRef}
    // ></div>
  )
}

export default Map
