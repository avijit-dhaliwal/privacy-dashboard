import React, { useEffect, useState } from 'react';
import { Typography, Container, Box, CircularProgress } from '@material-ui/core';
import api from '../services/api';

const PrivacyPolicy = ({ appId }) => {
  const [policy, setPolicy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const response = await api.get(`/privacy-policy/${appId}`);
        setPolicy(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching privacy policy:', error);
        setLoading(false);
      }
    };

    fetchPolicy();
  }, [appId]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Privacy Policy
        </Typography>
        {policy && (
          <>
            <Typography variant="h6">Summary</Typography>
            <Typography variant="body1">{policy.summary}</Typography>
            <Box my={2}>
              <Typography variant="h6">Full Policy</Typography>
              <Typography variant="body2">{policy.fullText}</Typography>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;