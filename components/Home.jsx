import { Box,Stack} from '@mui/material'
import RightBar from './RightBar'
import SideBar from './SideBar'
import SocialMedia from './SocialMedia'
import ContentArea from './ContentArea'
import Navbar from './Navbar'
import { useState } from 'react'

const Home = () => {
 
//  const [isPost,setIsPost] = useState(false)


//  const postPass = (data)=>{
//     setIsPost(data)
//  }

  return (

    <>
    <Navbar/>
    <Box >
    {/* anyname={postPass}postClicked={isPost} */}
    <Stack direction="row"  justifyContent="space-between">     
        <SideBar ></SideBar>
        <ContentArea ></ContentArea>
        <RightBar></RightBar>
    </Stack>

    <SocialMedia></SocialMedia>
    </Box>
    </>
  )
}

export default Home