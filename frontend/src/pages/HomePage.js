import React from 'react';
import { Typography, Container, Box } from '@material-ui/core';
import Login from '../components/Login';

const HomePage = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Privacy Dashboard
        </Typography>
        <Typography variant="body1" gutterBottom>
          Understand and manage your data usage across various applications.
        </Typography>
        <Login />
      </Box>
    </Container>
  );
};

export default HomePage;