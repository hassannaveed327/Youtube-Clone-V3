import {React, useState} from 'react'
import {Paper, IconButton, Input} from '@mui/material'
// import {useNavigate} from 'react-router-dom'
import { Search } from '@mui/icons-material'
// import { borderRadius } from '@mui/system'


const SearchBar = () => {
    return (
        <Paper
          component='form'
        //   onSubmit={onhandleSubmit}
          sx={{
            borderRadius: 20,
            border: '1px  #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5 },
          }}
        >
          <Input
            className='search-bar'
            placeholder='Search...'
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IconButton type='submit' alignitems="center" sx={{ p: '10px', color: 'red'  }} aria-label='search'>
            <Search />
          </IconButton>
        </Paper>
      );
}

export default SearchBar