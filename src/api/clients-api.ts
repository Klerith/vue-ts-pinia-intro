import axios from 'axios';

const clientsApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});



export default clientsApi;