import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { useRef } from 'react'
import InputAdornment from '@mui/material/InputAdornment';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputref = useRef()
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            {/* <label htmlFor="addItem"></label> */}
            {/* <input
                autoFocus
                ref={inputref}
                id='addItem'
                type="text"
                placeholder='addItem'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            /> */}
            <TextField
                // id="addItem"
                label="Add List"
                variant="outlined"
                name='Additem'
                size='small'
                fullWidth="fullWidth"
                autoFocus
                ref={inputref}
                type="text"
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                InputLabelProps={{ required: false }}
                InputProps={{
                    endAdornment: <InputAdornment position="start">
                        <IconButton
                            type='submit'
                            color='primary'
                            aria-label='Add Item'
                            onClick={() => inputref.current.focus()}>
                            <AddIcon />
                        </IconButton>
                    </InputAdornment>,
                }}

            />


            {/* <button
                type='submit'
                aria-label='Add Item'
                onClick={() => inputref.current.focus()}
            >
                <AddIcon />
            </button> */}
            {/* <IconButton
                type='submit'
                color='primary'
                aria-label='Add Item'
                onClick={() => inputref.current.focus()}>
                <AddIcon />
            </IconButton> */}
        </form>
    )
}

export default AddItem