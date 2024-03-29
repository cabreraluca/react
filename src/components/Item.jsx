import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function Item({item}) {
  const {id} = item;
  const navegar = useNavigate();
  return (
      <div>
        <Card sx={{ flex: "1 1 100%", backgroundColor: "black", padding: '1.5rem' , margin: '1rem', borderRadius: 0 }}>
        <CardMedia
          component="img"
          height="400"
          image={item.pictureUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={'white'}>
            {item.title}
          </Typography>
          <Typography variant="h7" color="white">
            ${item.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={()=>navegar(`/product/${id}`)} size='small' color='primary' variant='outlined'>Ver más</Button>
        </CardActions>
      </Card>
      </div>
  )
}