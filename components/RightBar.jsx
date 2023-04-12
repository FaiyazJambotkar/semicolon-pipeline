import React, { useState } from 'react'
import { Box, Button,} from '@mui/material';
import AddArticle from './AddArticle';
import AddPost from './AddPost';

const RightBar = () => {

  const [state,setState] = useState(true);

  const AddArticles=()=>{
    setState(true);
  }
  const AddPosts=()=>{
    setState(false)
  }


  return (
    <>
    {/* <Typography variant="h6" fontWeight={100}>Add Article :</Typography> */}

   <Box flex={2} padding={1}  sx={{textAlign:"center" ,display:{xs:"none",sm:"none",md:"block"}}}>
   <Box position="fixed">
   
   <Box>
   <Button onClick={AddArticles} >Add Article</Button>
   <Button onClick={AddPosts} >Add Post</Button>
   </Box>
   
   { state ? <AddArticle/> : <AddPost/> }
   
    </Box>
    </Box>
    </>
  )
}

export default RightBar