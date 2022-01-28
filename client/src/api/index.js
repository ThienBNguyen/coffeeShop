import axios from 'axios'
const url = "http://localhost:5000/user/profile"
export const fetchUser = () => axios.get(url)