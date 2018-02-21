import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-29426.firebaseio.com/'
});

export default instance;