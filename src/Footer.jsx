import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


const Footer = ({ length }) => {
    const year = new Date();
    return (
        <AppBar position="static">
            <Toolbar>
                <footer>
                    {length} {length <= 1 ? "Entry" : "Entries"}
                </footer>
            </Toolbar>
        </AppBar>

    );
}

export default Footer