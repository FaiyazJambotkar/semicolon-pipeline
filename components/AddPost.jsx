import { Avatar, Button, Grid, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const AddPost = () => {

  const [name,setName] = useState('')
  const [title,setTitle] = useState('')
  const [caption,setCaption] = useState('')
  const [imagesrc,setImagesrc] = useState('')

  const paperSytle={
    padding:16,
    height:"fit-content",
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
  const captionchangeHandler = (event) => {
    setCaption(event.target.value)
  }
  const imagesrcchangeHandler = (event) => {
    setImagesrc(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

  const postData ={
      name:name,
      title:title,
      caption:caption,
      imagesrc:imagesrc
  }
  console.log(postData)

  setName('')
  setTitle('')
  setCaption('')
  setImagesrc('')
  }

  return (
    <>
   <Paper style={paperSytle} elevation={4} >
    <form onSubmit={submitHandler}>
    <Grid align="center">
    <Avatar sx={{backgroundColor:"#64c4ed",mb:2,height:50,width:50}}><AddAPhotoIcon></AddAPhotoIcon></Avatar>
    </Grid>

    <TextField variant="outlined" label="Enter Your Name" placeholder='Enter Your Name' fullWidth required sx={{mb:1}} onChange={namechangeHandler}>
    </TextField>

    <TextField variant="outlined" label="Enter Title" placeholder='Title of the post' fullWidth required sx={{mb:1}} onChange={titlechangeHandler}>
      
    </TextField>

    <TextField variant="outlined" label="Enter Caption" placeholder='Enter Caption' fullWidth required sx={{mb:1}} onChange={captionchangeHandler}>
     
    </TextField>

    <TextField variant="outlined" label="Add Image URL" placeholder='Enter Image URL' fullWidth required sx={{mb:1}} onChange={imagesrcchangeHandler}>
        
    </TextField>

    <Button type="submit" style={btnStyle} variant='contained' fullWidth sx={{backgroundColor:"#60c736"}}>Submit</Button>

    </form>
    </Paper>
  </>
  )
}

export default AddPost