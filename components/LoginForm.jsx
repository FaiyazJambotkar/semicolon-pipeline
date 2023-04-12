import { Avatar, Button, Grid, Paper, TextField } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

const navigate = useNavigate()

  const paperSytle={
    padding:30,
    height: '70vh',
    width:280,
    margin:"20px auto", 
  }
  const btnStyle={
    margin:'10px 0'
  }

  const loginHandler = () => {
      navigate('/home')
  }

  return (
    <>
      <Paper elevation={10} style={paperSytle}>
        <Grid align="center">
        <Avatar sx={{backgroundColor:"#1976d2",mb:2,height:60,width:60}}><AccountCircleIcon></AccountCircleIcon></Avatar>
  
       </Grid>
       <TextField variant="outlined" label="username" placeholder='enter username'  fullWidth required sx={{mb:1}}></TextField>
       <TextField label="password" type="password" placeholder='enter password'  fullWidth required></TextField>
       <Button onClick={loginHandler} type="submit" color="primary" style={btnStyle} variant='contained' fullWidth >Log in
       </Button>
      </Paper>

    </>
  )
}

export default LoginForm