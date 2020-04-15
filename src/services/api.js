import axios from 'axios';

const api = axios.create({
    baseURL: 'https://treeappubuntu.herokuapp.com',
}) 

export default api;