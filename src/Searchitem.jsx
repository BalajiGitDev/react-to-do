import React from 'react'
import TextField from '@mui/material/TextField';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';


const Searchitem = ({ search, setSearch }) => {
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>

            <TextField
                label="Search Items"
                variant="outlined"
                size='small'
                name='SearchItem'
                fullWidth="fullWidth"
                autoFocus
                type="text"
                role="searchbox"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default Searchitem