import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function messeges(prop) {
 

  return (
    <Card className="card_width">
      <CardContent className="para">
        <Typography  variant="body2" component="p">
          {prop.value}
          </Typography>
      </CardContent>
      
    </Card>
  );
}