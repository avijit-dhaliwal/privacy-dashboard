import React from 'react';
import { Typography, Container, Box } from '@material-ui/core';
import Navbar from '../components/Navbar';

const SettingsPage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Settings
          </Typography>
          <Typography variant="body1">
            Settings functionality to be implemented.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default SettingsPage;