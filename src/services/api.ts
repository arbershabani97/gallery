
import axios from 'axios';

const instance = axios.create({
    baseURL: `https://api.pexels.com/v1/`
});

instance.interceptors.request.use(function (config) {
    if (config.headers) config.headers.Authorization = process.env.REACT_APP_PEXELS_API_KEY || '';
    return config
});

// instance.interceptors.response.use(function (response) {}, function (error) {});

export const API = instance;