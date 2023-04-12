import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import React, { useState } from 'react'
import NotesIcon from '@mui/icons-material/Notes';
import InfoIcon from '@mui/icons-material/Info';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const SideBar=(props)=>{
  
  const [postClicked,setPostClicked] = useState(false)

const postClickedHandler = () => {
  setPostClicked(true)
  props.anyname(postClicked)
}
const articleClickedHandler = () => {
  setPostClicked(true)
  props.anyname(postClicked)
}

return (
    
    <Box 
    flex={1} padding={2} 
    sx={{backgroundColor:"white", display:{xs:"none",sm:"none",md:"block"}}}>
      <Box position="fixed">
     
      <List>
          <ListItem disablePadding>
            <ListItemButton  onClick={articleClickedHandler} component="a" >
              <ListItemIcon>
                <NotesIcon></NotesIcon>
              </ListItemIcon>
              <ListItemText primary="Articles" /> 
            </ListItemButton>
          </ListItem>
     
          <ListItem disablePadding>
            <ListItemButton onClick={postClickedHandler} component="a">
              <ListItemIcon>
                <CameraAltIcon></CameraAltIcon>
              </ListItemIcon>
              <ListItemText primary="Posts" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>   
            <ListItemButton component="a">
              <ListItemIcon>
               <InfoIcon></InfoIcon>
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
  
        </List>
        </Box>
    </Box>
  ) 
}




export default SideBar