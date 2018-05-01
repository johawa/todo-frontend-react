import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://arcane-inlet-70554.herokuapp.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;