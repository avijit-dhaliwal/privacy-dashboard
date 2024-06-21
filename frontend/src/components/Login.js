import React from 'react';
import { Button, Typography, Container, Box } from '@material-ui/core';

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Privacy Dashboard
        </Typography>
        <Button variant="contained" color="primary" href="/auth/google" fullWidth>
          Sign in with Google
        </Button>
        <Box my={2}>
          <Button variant="contained" color="secondary" href="/auth/apple" fullWidth>
            Sign in with Apple
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;