import {React, useEffect, useState  } from 'react'
import {Box, Stack} from '@mui/material'
import  {Sidebar, Videos}  from "./index"
import { fetchFromAPI } from '../utilities/FetchAPi'

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New');
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  //Component---Rendering
  return (
    <Stack  sx={{ flexDirection: {sx:'column', md:'row'}}}>
   <Box sx={{height: {sx:'auto', md: '92vh'}, borderRight: "1px solid #3d3d3d", px:{sx:0,md:1.5 }}}>
    <Sidebar
    selectedCategory={selectedCategory}
    setselectedCategory={setselectedCategory}
     />
    
    </Box>
    <Box sx={{fontSize:"2rem", fontWeight: "bold", mb:2}}>
      <span style={{color: "#fff"}}>New   </span>
      <span style={{color: "red"}}>Videos</span>
    </Box>
    <Videos videos={videos}/>
    </Stack>
  )
}

export default Feed;