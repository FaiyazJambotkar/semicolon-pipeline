import { createTheme, Fab, Tooltip } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box } from '@mui/system';

const SocialMedia = () => {
  const ownStyle = createTheme({
  

  })
  return (
    <>
         <Tooltip style={ownStyle} title="Visit our socials" sx={{display:{xs:"none",md:"block"},position:"fixed",bottom:40,left:{md:30,lg:40}}}>
         <Box>
            <Fab size="small" color="primary" aria-label="instagram" sx={{mr:1}} href='https://www.instagram.com/'>
            
            <InstagramIcon></InstagramIcon>
            </Fab>
            <Fab size="small" color="primary" aria-label="twitter" sx={{mr:1}} href='https://twitter.com/'>
            <TwitterIcon></TwitterIcon>
            </Fab>
            <Fab size="small" color="primary" aria-label="facebook" href='https://www.facebook.com/'>
            <FacebookIcon></FacebookIcon>
            </Fab>
          </Box>
         </Tooltip>
  
    </>
  )
}

export default SocialMedia