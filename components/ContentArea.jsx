import { Button, Stack } from '@mui/material'
import React, { useState } from 'react'
import ArticlesList from './ArticlesList'
import Post from './Post';

const ContentArea = (props) => {
  // const [postClicked,setPostClicked]= useState(false)
  // setPostClicked(props.postClicked)

  const [state,setState] = useState(true);

  const showArticles=()=>{
    setState(true);
  }
  const showPosts=()=>{
    setState(false)
  } 
  const mainStyle = {
    textAlign:"center"
  }

  return (
  <>
      <Stack flex={4} >

      <div style={mainStyle}>
      <Button onClick={showArticles}>Articles</Button>
      <Button onClick={showPosts}>Posts</Button>
      </div>

      <div>
      { state ? <ArticlesList/> : <Post/> }
      </div>

       </Stack> 
  </>
  )
}

export default ContentArea

// state = 1
// <>
// <div flex>
//   <button></button>
//   <button></button>
// </div>
// <div>
//     <box>
//       1
//       2
//       3
//     </box>
// </div>
// </>
