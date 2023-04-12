import { Avatar, Card, CardActions, CardContent, CardMedia, IconButton} from '@mui/material'
import React from 'react'
import './post.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Post = () => {

  const posts = [
    {
        id:121,
        title:"Importance of Peace",
        author:"Siddharth",
        image:"https://images.unsplash.com/photo-1672834797496-6200732ff3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        caption:"The world we live in is ever changing and with it would come challenges which mankind would have to face squarely and bravely. This can however only be achieved if we realize just how important peace is to the world in general and in preserving humanity. There is no civilization in the entire human history which has lasted forever without a form of peace. Peace literally is the only way we can secure the future of our generation which are yet to come."
    },
    {
      id:122,
      title:"Sameer",
      author:"Volkwagen Polo",
      image:"https://images.unsplash.com/photo-1676623224782-53f099156f9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      caption:"Polo is the preminum hatchback. I own polo since 2016. I love the car. No comparable quality small car in India. Easy to use, low maintenance, premium parts, eligant and simple looks, confident to drive. No comparison in India. VW should continue the model in India."
  },
  {
    id:123,
    title:"john",
    author:"why use frameworks",
    image:"https://images.unsplash.com/photo-1673280929657-d551e70fa2bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    caption:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like."
  },
  {
    id:124,
    title:"sahil",
    author:"why react is the next big thing",
    image:"https://images.unsplash.com/photo-1645285751927-7b9c455d7f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    caption:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like."
}
]

  return (
    <ul>
   {posts.map((post)=>(

          <Card className='cardstyle' sx={{margin:2}}>
          <li key={post.id}>
                <div className='style1'>
               <Avatar sx={{ bgcolor:"red" }} aria-label="avatar"></Avatar>
               <div>
               <h3> {post.author}</h3>
               <h6>{post.title}</h6>
               </div>
               </div> 
     

          <CardMedia >
          <img src={post.image} alt="postImage" height={'80%'} width={'100%'}/>
          </CardMedia>
          {/* className='nospace' */}
          <CardContent sx={{paddingBottom:0}}>
            {post.caption}
          </CardContent>

          <CardActions disableSpacing>

          <IconButton aria-label="share">
          <FavoriteBorderIcon />
          </IconButton>

          {/* <IconButton aria-label="share">
          <ShareIcon />
          </IconButton> */}

          </CardActions>
         
          </li>
        </Card>
        ))}

    {/* <Card sx={{margin:2}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe"></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorderOutlinedIcon />} checkedIcon={<FavoriteIcon sx={{color:"red"}}/>}  />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card> */}
    </ul>
  )
}

export default Post