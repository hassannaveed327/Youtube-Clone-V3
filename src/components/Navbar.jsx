import React from 'react'
import { Link } from 'react-router-dom';
// import {Feed, VideoDetail, ChannelDetail, SearchFeed } from './index';
import { Stack } from '@mui/material';
import { logo } from '../utilities/constants';
import SearchBar from './SearchBar';


const Navbar = () => {
  return (
    <Stack direction = "row" alignitems="center"  p={2} sx={{position: 'sticky', backgroundColor: '#000', top: 0, justifyContent: 'space-between'}}>
   <Link path="/" style={{ display: 'flex', alignItems:'center'}}>
    <img src={logo} alt='aphoto' height={40}/>
    </Link>
    <SearchBar />
     </Stack>
  )
}

export default  Navbar;