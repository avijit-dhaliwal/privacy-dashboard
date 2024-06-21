import api from '../services/api';

export const isAuthenticated = async () => {
  try {
    await api.get('/user/profile');
    return true;
  } catch (error) {
    return false;
  }
};