import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Item({item}) {
  return (
    <div>
        <Card sx={{ backgroundColor: "black", padding: '1.5rem' , margin: '1rem', borderRadius: 0 }}>
      <CardMedia
        component="img"
        height="400"
        image={item.pictureUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={'white'}>
         {item.id}: {item.title}
        </Typography>
        <Typography variant="body2" color="red">
          {item.description}
        </Typography>
        <Typography variant="body2" color="white">
          Price: ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{textalign: 'center', color: 'red' }} >Comprar</Button>
      </CardActions>
    </Card>
    </div>
  )
}