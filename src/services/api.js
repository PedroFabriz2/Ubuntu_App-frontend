import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ubuntutree.herokuapp.com/',
}) 

export default api;
