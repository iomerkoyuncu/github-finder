import * as React from 'react';
import { Link } from 'react-router-dom';
 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material";
import { Stack } from '@mui/material';


const StyledCard = styled(Card)(({theme}) => ({
  width: "250px",
  height: "250px", 
  color: "white", 
  backgroundColor: theme.palette.primary.main, 
  textAlign: "center"
}))

export default function MediaCard() {
  return (
    <StyledCard >
      <Stack   direction="column" justifyContent="center" alignItems="center" >
      <CardMedia
        component="img"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZC75H3iMyA-ksbRAU7h08A2xQBXJll-Oyfw&usqp=CAU"
        sx={{ borderRadius: '50px', width: "100px", mt: "10px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">ismetkync</Typography>
        <Typography variant="body2" color="inherit">İsmet Ömer Koyuncu</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" color="inherit" >
          <Link to={`/users/ismetkync`}>Visit Profile</Link> 
        </Button>
      </CardActions>
      </Stack>
    </StyledCard>
  );
}