import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";

const MenuBar = () => {

return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex', color:'black'} }}
                >
                    CSE15L Lab Reports
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button
                        component = {Link} to='/'
                        sx={{ my: 2, color: 'black', display: 'block' }}
                    >
                        Home
                    </Button>
                    <PopupState variant="popover" popupId="report-menu">
                        {(popupState) => (
                            <React.Fragment>
                            <Button 
                            sx={{ my: 2, color: 'black', display: 'block' }}
                            variant="text" {...bindTrigger(popupState)}>
                                Lab Reports
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem component = {Link} to='/lab-report-1'>Lab Report 1: Week 2</MenuItem>
                            </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>
                    <PopupState variant="popover" popupId="lab-menu">
                        {(popupState) => (
                            <React.Fragment>
                            <Button 
                            sx={{ my: 2, color: 'black', display: 'block' }}
                            variant="text" {...bindTrigger(popupState)}>
                                Lab Pages
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem component = {Link} to='/test.html'>Lab 2 Markdown</MenuItem>
                            </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>
                    <Button
                        target="_blank" href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                        sx={{ my: 2, color: 'black', display: 'block' }}
                    >
                        About
                    </Button>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  );
};
export default MenuBar;
