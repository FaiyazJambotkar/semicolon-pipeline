import { Card, CardContent } from '@mui/material'
import React from 'react'

const ArticlesList = () => {

  const articles = [
    {
        name:"sid",
        title:"why react is necessary",
        articleBody:"sadkjandakwdaakdmamdlkamdam, dadwdlmadma sdlmawkmladlamdkwadmadkmadkmadkmawkmdakda,dadkadad"
    },
    {
      name:"sameer",
      title:"why node",
      articleBody:"sadkjandakwdaakdmamdlkamdam, dadwdlmadma sdlmawkmladlamdkwadmadkmadkmadkmawkmdakda,dadkadad"
  },
  {
    name:"john",
    title:"why use frameworks",
    articleBody:"sadkjandakwdaakdmamdlkamdam, dadwdlmadma sdlmawkmladlamdkwadmadkmadkmadkmawkmdakda,dadkadad"
  },
  {
    name:"sahil",
    title:"why react is the next big thing",
    articleBody:"sadkjandakwdaakdmamdlkamdam, dadwdlmadma sdlmawkmladlamdkwadmadkmadkmadkmawkmdakda,dadkadad"
},
{
  name:"sameer",
  title:"why node",
  articleBody:"sadkjandakwdaakdmamdlkamdam, dadwdlmadma sdlmawkmladlamdkwadmadkmadkmadkmawkmdakda,dadkadad"
},
{
name:"john",
title:"why use frameworks",
articleBody:"sadkjandakwdaakdmamdlkamdam, dadwdlmadma sdlmawkmladlamdkwadmadkmadkmadkmawkmdakda,dadkadad"
},
{
name:"sahil",
title:"why react is the next big thing",
articleBody:"sadkjandakwdaakdmamdlkamdam, dadwdlmadma sdlmawkmladlamdkwadmadkmadkmadkmawkmdakda,dadkadad"
}
]


  return (
    <>
      <ul>
        {articles.map((article)=>(
          <Card sx={{margin:"8px"}}>
            <CardContent >
          <li>
          <h1>{article.title}</h1>
          <h6>Author: {article.name}</h6>
          <p>{article.articleBody}</p>
          </li>
          </CardContent>
          </Card>
        ))}
      </ul>
    </>
  )
}

export default ArticlesList


    //  {/* <Typography variant="h6" fontWeight={100}>Articles :</Typography> */}
// {/* 
//     <List sx={{ width: '100%' }}>
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Remy Sharp" src="" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Brunch this weekend?"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 Ali Connors
//               </Typography>
//               {" — I'll be in your neighborhood doing errands this…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Travis Howard" src="" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Summer BBQ"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 to Scott, Alex, Jennifer
//               </Typography>
//               {" — Wish I could come, but I'm out of town this…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Cindy Baker" src="" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Oui Oui"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 Sandra Adams
//               </Typography>
//               {' — Do you have Paris recommendations? Have you ever…'}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Remy Sharp" src="" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Brunch this weekend?"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 Ali Connors
//               </Typography>
//               {" — I'll be in your neighborhood doing errands this…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Travis Howard" src="" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Summer BBQ"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 to Scott, Alex, Jennifer
//               </Typography>
//               {" — Wish I could come, but I'm out of town this…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Cindy Baker" src="" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Oui Oui"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 Sandra Adams
//               </Typography>
//               {' — Do you have Paris recommendations? Have you ever…'}
//             </React.Fragment>
//           }
//         />
//     </ListItem>
//     </List> */}
 