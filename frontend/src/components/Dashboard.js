import React, { useEffect, useState } from 'react';
import { Typography, Container, Box, CircularProgress } from '@material-ui/core';
import api from '../services/api';

const Dashboard = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await api.get('/connected-apps');
        setApps(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching apps:', error);
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Your Connected Apps
        </Typography>
        {apps.map((app) => (
          <Box key={app.id} my={2}>
            <Typography variant="h6">{app.name}</Typography>
            <Typography variant="body1">Provider: {app.provider}</Typography>
            <Typography variant="body2">
              Last accessed: {new Date(app.lastAccessed).toLocaleString()}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Dashboard;