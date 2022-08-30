/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
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
  Container,
} from '@mui/material';
import Slider from '@mui/material/Slider';
import {css} from '@emotion/react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';

const MainPage = () => {
 

  return (

    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <CameraEnhanceIcon onClick={() => console.log("CLICKED")} />
          <Typography variant="h6">Travel Photos</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm"
          css={css`margin-top:100px`}
          >
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              My Album
            </Typography>
            <Typography variant="h5" align='center' color="textSecondary" paragraph>
              Hey! Thank you for taking a look at my photo album for my fictional travels.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button 
                    css={css`
                    background-color: #5FA052;
                    color: #fff;
          
                    :hover {
                      background-color: #2e8b57;
                    }
                  `}
                  >
                View Photos

                  </Button>
                
                </Grid>
                <Grid item>
                  <Button    
                  css={css`
                    background-color: #fff;
                    color: #000;
                    :hover {
                      background-color: #2e8b57;
                    }
                  `}>
                   
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}

export default MainPage