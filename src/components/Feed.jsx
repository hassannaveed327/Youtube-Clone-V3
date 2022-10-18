import {React, useEffect, useState  } from 'react'
import {Box, Stack} from '@mui/material'
import  {Sidebar, Videos}  from "./index"
import { FetchAPI } from '../utilities/FetchAPi'

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New')
  //
  useEffect(() => {
    FetchAPI(`search?part=snippet&q=${selectedCategory}`)
  }, [selectedCategory])
  //ComponentRendering
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
    <Videos video={[]}/>
    </Stack>
  )
}

export default Feed