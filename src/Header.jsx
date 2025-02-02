import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ title }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <header>
                    <h1>{title}</h1>
                </header>
            </Toolbar>
        </AppBar>
    );
}
export default Header