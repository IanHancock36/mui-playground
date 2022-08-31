import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function MediaCard({ cardInfo, handleOpen }) {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 250 }}>
      <Avatar alt="Team Member Avatars" src={cardInfo.photo} variant="rounded" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardInfo.first_name}{" "}{cardInfo.last_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardInfo.job_title}
        </Typography>
        <CardActions>
          <Button onClick={handleOpen} size="small">Learn More</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}