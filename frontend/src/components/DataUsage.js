import React, { useEffect, useState } from 'react';
import { Typography, Container, Box, CircularProgress } from '@material-ui/core';
import api from '../services/api';

const DataUsage = ({ appId }) => {
  const [dataUsage, setDataUsage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataUsage = async () => {
      try {
        const response = await api.get(`/data-usage/${appId}`);
        setDataUsage(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data usage:', error);
        setLoading(false);
      }
    };

    fetchDataUsage();
  }, [appId]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Data Usage
        </Typography>
        {dataUsage.map((usage) => (
          <Box key={usage.id} my={2}>
            <Typography variant="h6">{usage.dataType}</Typography>
            <Typography variant="body1">Purpose: {usage.purpose}</Typography>
            <Typography variant="body2">
              Last accessed: {new Date(usage.lastAccessed).toLocaleString()}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default DataUsage;