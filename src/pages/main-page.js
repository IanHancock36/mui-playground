/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import React from 'react'
import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Container,
  Grid,
  TextField
} from '@mui/material';
import { css } from '@emotion/react';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import MediaCard from '../components/media-card'
import SearchBar from '../components/search-bar'
import { Home, HomeMax, HomeMaxRounded, TravelExplore } from '@mui/icons-material';

const MainPage = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar css={css`background-color: #2e8b57; color: #fff;`}>
          <TravelExplore onClick={() => console.log("CLICKED")} />
          <Typography variant="h6" css={css`margin-left:5px`}>Mock Company</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" css={css`margin-top:100px`}>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Company Directory 
            </Typography>
            <Typography variant="h5" align='center' color="textSecondary" paragraph>
              Search Our Wonderful Team Members
            </Typography>
            <div>
              <Grid container justifyContent="center">
                <SearchBar align='center' />
              </Grid>
            </div>
          </Container>
        </div>
        <div>
          <Container maxWidth="lg" css={css`margin-top:100px`} >
            <Grid container spacing={4} align='center'>
              <Grid item xs={12} sm={6} md={4}>
                <MediaCard />
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </>
  )
}

export default MainPage
