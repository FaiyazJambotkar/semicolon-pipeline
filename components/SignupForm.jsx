import { Avatar, Button, Grid, Paper, TextField } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const SignupForm = () => {

  const paperSytle={
    padding:30,
    height: '70vh',
    width:280,
    margin:"20px auto", 
  }
  const btnStyle={
    margin:'10px 0'
  }

  return (
    <>
    <Grid>
     <Paper elevation={10} style={paperSytle}>
       <Grid align="center">
       <Avatar sx={{backgroundColor:"#60c736",mb:2,height:60,width:60}}><AddCircleOutlinedIcon></AddCircleOutlinedIcon></Avatar>
 
      </Grid>
      <TextField variant="outlined" label="username" placeholder='choose username' fullWidth required sx={{mb:1}}/>

      <TextField label="password" type="password" placeholder='enter password' fullWidth required sx={{mb:1}}></TextField>

      <TextField label="confirm password" type="password" placeholder='confirm password' fullWidth required ></TextField>
      
      <Button type="submit" style={btnStyle} variant='contained' fullWidth sx={{backgroundColor:"#60c736"}}>Sign Up
      </Button>

     </Paper>
    </Grid>
   </>
  )
}

export default SignupForm