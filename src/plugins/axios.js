import axios from 'axios';

const instance = axios.create({
  baseURL : `${process.env.API_URL}`
});

instance.interceptors.request.use(function (config) {
  return Promise.resolve(config);
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  return (response.status === 200)? Promise.resolve(response) : Promise.reject(response);
}, function (error) {
  return Promise.reject(error);
});

export default instance;
