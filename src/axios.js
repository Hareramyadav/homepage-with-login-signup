import axios from 'axios';

const instance = axios.create({
    baseURL:'https://online-exam-59f34.firebaseio.com/'
});

export default instance;