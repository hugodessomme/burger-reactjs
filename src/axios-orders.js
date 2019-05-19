import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-reactjs-18532.firebaseio.com/',
});

export default instance;
