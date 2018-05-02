import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


//Axios default Setup

axios.defaults.baseURL = 'https://arcane-inlet-70554.herokuapp.com';
axios.defaults.headers.common['x-auth'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWU4M2Q2NzdjZjBiMTAwMTQzNzc5OTQiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTI1MTY5NTEyfQ.aWK-IsfYNnPRUaDBUBXlxyZc3ZFPjCRkevGdtJw2zsI';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

//Axio default console.log
axios.interceptors.request.use(request => {
    //console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    //console.log(response);
    // Edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
