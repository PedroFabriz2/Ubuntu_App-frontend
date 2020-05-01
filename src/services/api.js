import axios from 'axios';

const api = axios.create({
    baseURL: process.env.DATABASE,
}) 

export default api;
