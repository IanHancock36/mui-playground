import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MOCK_DATA from '../db/MOCK_DATA.json'
import { integerPropType } from '@mui/utils';

export default function ImgMediaCard() {


  return (
    <div>
            {MOCK_DATA.map((card) => {
       return (
        <div key={card.id}>
    <Card sx={{ maxWidth: 345 }}>

        
            <CardMedia
              component="img"
              alt="Team-Member-Photos"
              height="200"
              image={card.photo} />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
            {card.first_name}{" "}{card.last_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {card.job_title}
              </Typography>
            </CardContent><CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>

     
    </Card>
    </div>
       )
      })}
    </div>
  );
}



// <Container maxWidth="md">
// <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//   <MediaCard />
//   <MediaCard />
//   <MediaCard />
// </Grid>
// </Container>