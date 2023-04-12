import  React, { useState } from 'react';
import { AppBar,Box,Button,Toolbar , Typography,} from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Navbar = () => {
  const [isloggedOut,setIsLoggedOut] =  useState(false)

  const navigate = useNavigate()
  
  const logoutHandler = () => {
      setIsLoggedOut(true)
      navigate('/')
  }

  return (
    <>
    {/* #ececec transparent*/}
    <AppBar position='sticky' sx={{ bgcolor: "#ececec",color:"black "}} >
    <StyledToolbar>

         <Typography variant="h6" sx={{padding:"16px", display:{xs:"none",sm:"block"}}}>SEMICOLON 
         </Typography>
    
    <MenuBookIcon sx={{padding:"16px", display:{xs:"block",sm:"none"}}}></MenuBookIcon>

    <Box sx={{justifyContent:'space-evenly'}}>
   
        <Button onClick={logoutHandler} variant="contained" sx={{backgroundColor: "primary",color:"white", mr: 2 }}  >
          Logout
        </Button>

      </Box>
   
    </StyledToolbar>
    </AppBar>

    </>
  )
}

export default Navbar
