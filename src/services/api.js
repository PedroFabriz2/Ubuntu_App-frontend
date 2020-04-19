import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ubuntutree.herokuapp.com/ongs',
}) 

export default api;
