import axios from 'axios';
const getUserUrl = 'http://localhost:5000/user/login';
const postUserUrl = 'http://localhost:5000/user/create';
export const fetchUser = () => axios.get(getUserUrl);
export const createUser = (newUser) => axios.post(postUserUrl, newUser);
