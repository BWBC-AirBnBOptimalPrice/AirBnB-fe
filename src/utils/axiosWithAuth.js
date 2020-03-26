import axios from 'axios';

const url = '';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: url,
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};