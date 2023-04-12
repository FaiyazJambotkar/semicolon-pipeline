import { Avatar, Button, Grid, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import SaveAsIcon from '@mui/icons-material/SaveAs';

const AddArticle = () => {

  const [name,setName] = useState('')
  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')

    const paperSytle={
        padding:16,
        height:"fit-content",
        // maxHeight:"40vh",
        width:'70%',
        maxWidth:400,
        margin:"5px auto", 
      }
      
      const btnStyle={
        margin:'10px 0',
        backgroundColor:"#64c4ed"
      }

      const namechangeHandler = (event) => {
        setName(event.target.value)
        console.log(name)
      }
       const titlechangeHandler = (event) => {
        setTitle(event.target.value)
      }
      const bodychangeHandler = (event) => {
        setBody(event.target.value)
      }

      const submitHandler = (event) => {
        event.preventDefault()

      const articleData ={
          name:name,
          title:title,
          body:body
      }
      console.log(articleData)
      setName('')
      setTitle('')
      setBody('')
      }

  return (
    <>

<Paper style={paperSytle} elevation={4} >
    <form onSubmit={submitHandler}>
    <Grid align="center">
    <Avatar sx={{backgroundColor:"#64c4ed",mb:2,height:50,width:50}}><SaveAsIcon></SaveAsIcon></Avatar>
    </Grid>

    <TextField variant="outlined" label="Enter Your Name" value={name} placeholder='Enter Your Name' fullWidth required  onChange={namechangeHandler} sx={{mb:1}}>
    </TextField>

    <TextField variant="outlined" label="Enter Title"  value={title} placeholder='Enter Title Of Article' onChange={titlechangeHandler} fullWidth required sx={{mb:1}}>
    </TextField>

    <TextField
          label="Article Body"
          fullWidth
          required
          placeholder='Enter Title Body'
          onChange={bodychangeHandler}
          value={body}
        >
   
    </TextField>

    <Button type="submit" style={btnStyle} variant='contained' fullWidth sx={{backgroundColor:"#60c736"}}>Submit</Button>
    </form>
    </Paper>

    {/* <Box>
      
     <Paper elevation={4} style={paperSytle}>

      <Box >
       <Grid align="center">
       <Avatar sx={{backgroundColor:"#64c4ed",mb:2,height:50,width:50}}><SaveAsIcon></SaveAsIcon></Avatar>
      </Grid>

      <TextField variant="outlined" label="Enter Title" placeholder='Title of the article' fullWidth required sx={{mb:1}}></TextField>
      <TextField label="Author" placeholder='Enter your name' fullWidth required sx={{mb:1}}></TextField>
      <TextField
          id="outlined-multiline-static"
          label="Article Body"
          multiline
          rows={3}
          fullWidth
          required
        />

      <Button type="submit" style={btnStyle} variant='contained' fullWidth sx={{backgroundColor:"#60c736"}}>Submit</Button>
      
      </Box>
     </Paper>
    </Box> */}
    </>
  )
}

export default AddArticle