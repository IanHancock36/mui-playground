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
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
const MainPage = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <CameraEnhanceIcon onClick={()=> console.log("CLICKED")}/>
          <Typography variant="h6">Travel Photos</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              My Album
            </Typography>
            <Typography variant="h5" align='center' color="textSecondary" paragraph>
              Hey! Thank you for taking a look at my photo album for my fictional travels. 
            </Typography>
            <Container align="center">
            <ButtonGroup variant="outlined" aria-label="outlined button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
            </Container>
          </Container>
        </div>
      </main>
    </>
  )
}

export default MainPage