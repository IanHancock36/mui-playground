import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ cardInfo }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Team-Member-Photos"
        height="200"
        image={cardInfo.photo} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardInfo.first_name}{" "}{cardInfo.last_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardInfo.job_title}
        </Typography>
      </CardContent><CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}