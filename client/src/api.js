import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const getSchedule = async (teams) => {
  const response = await API.post('/schedule', { teams });
  return response.data;
};
