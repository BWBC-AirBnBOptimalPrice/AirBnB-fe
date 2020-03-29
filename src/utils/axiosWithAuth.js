import axios from 'axios';

const url = `http://localhost:8000`;
//'https://lambda-airbnb.herokuapp.com'
export const axiosWithAuth = () => {
  return axios.create({
    baseURL: url,
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};