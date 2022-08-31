/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Container,
  Grid,
} from "@mui/material";
import { css } from "@emotion/react";
import MediaCard from "../components/MediaCard";
import SearchBar from "../components/SearchBar";
import { TravelExplore } from "@mui/icons-material";
import teamData from "../db/MOCK_DATA.json";

const filterTeamMembers = (teamData, searchedTeamMembers) => {
  if (!searchedTeamMembers) {
    return teamData;
  }
  return teamData.filter((teamMember) => {
    const teamMemberName = teamMember.first_name.toLowerCase();
    return teamMemberName.includes(searchedTeamMembers);
  });
};
const MainPage = () => {
  const [searchedTeamMembers, setSearchedTeamMembers] = useState("");
  const filteredTeamData = filterTeamMembers(teamData, searchedTeamMembers);

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar
          css={css`
            background-color: #2e8b57;
            color: #fff;
          `}
        >
          <TravelExplore onClick={() => console.log("CLICKED")} />
          <Typography
            variant="h6"
            css={css`
              margin-left: 5px;
            `}
          >
            Mock Company
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container
            maxWidth="sm"
            css={css`
              margin-top: 100px;
            `}
          >
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Company Directory
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Search Our Wonderful Team Members
            </Typography>
            <div>
              <Grid container justifyContent="center">
                <SearchBar
                  searchedTeamMembers={searchedTeamMembers}
                  setSearchedTeamMembers={setSearchedTeamMembers}
                />
              </Grid>
            </div>
          </Container>
        </div>
        <div>
          <Container
            maxWidth="lg"
            css={css`
              margin-top: 100px;
            `}
          >
            <Grid container spacing={4} align="center">
              {filteredTeamData.map((cardInfo) => (
                <Grid item key={cardInfo.id} xs={12} sm={6} md={4}>
                  <MediaCard cardInfo={cardInfo} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
    </>
  );
};

export default MainPage;
