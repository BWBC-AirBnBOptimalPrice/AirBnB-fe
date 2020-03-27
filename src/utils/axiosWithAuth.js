import axios from 'axios';

const url = 'https://lambda-airbnb.herokuapp.com';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: url,
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};