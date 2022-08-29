import React from 'react'
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline, Grid,
  Toolbar,
  Container
} from '@mui/material';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
const MainPage = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <CameraEnhanceIcon />
          <Typography variant="h6">Travel Photos</Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default MainPage