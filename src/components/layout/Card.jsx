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

export default function MediaCard({userData}) {

  console.log(userData)
  return (
    <StyledCard >
      <Stack   direction="column" justifyContent="center" alignItems="center" >
      <CardMedia
        component="img"
        image={userData.avatar_url}
        sx={{ borderRadius: '50px', width: "100px", mt: "10px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{userData.login}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" color="inherit" >
          <Link to={`/users/${userData.login}`}>Visit Profile</Link> 
        </Button>
      </CardActions>
      </Stack>
    </StyledCard>
  );
}