import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Ninja Turtle
        </Typography>
        <Typography variant="body2" color="text.secondary">
       I like Turtles
        </Typography>
      </CardContent>
      <CardActions>
       <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}



// <Container maxWidth="md">
// <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//   <MediaCard />
//   <MediaCard />
//   <MediaCard />
// </Grid>
// </Container>