import axios from 'axios';

const headers = {
  'content-type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const config = {
  baseURL: process.env.REACT_APP_MAIN,
  timeout: 10000,
  headers,
};

const instance = axios.create(config);

instance.interceptors.request.use(
  (config) => {
    console.log('config', config);
    return config;
  },
  (err) => {
    console.log('create instalce', err);
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log('interceptors res', response);
    return response;
  },
  (error) => {
    console.log('interceptors error');
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
      return Promise.reject(error.response);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
      return Promise.reject(error.request); //time out
    } else {
      // Something happened in setting up the request that triggered an Error
      //falta implementar para poder actualizar el token
      // if (error.response.status === 403 && !originalRequest._retry) {
      //   originalRequest._retry = true;
      //   const access_token = await refreshAccessToken();
      //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      //   return axiosApiInstance(originalRequest);
      // }
      console.log('Error', error.message);
      return Promise.reject(error.message);
    }
  }
);

export default instance;
