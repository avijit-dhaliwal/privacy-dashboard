import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Privacy Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/dashboard">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/settings">
          Settings
        </Button>
        <Button color="inherit" href="/auth/logout">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;