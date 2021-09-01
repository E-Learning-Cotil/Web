import axios from 'axios';
import { parseCookies } from 'nookies';

function getAPIClient(ctx?: any){
    const { 'elearning.token': token } = parseCookies(ctx);
    
    const api = axios.create({
        baseURL: process.env.API_URL
    });
    
    if(token){
        api.defaults.headers['Authorization'] = `Bearer ${token}`
    }

    return api;
}

const api = getAPIClient();

export {
    getAPIClient,
    api
};