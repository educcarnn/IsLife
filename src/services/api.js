import axios from 'axios';

const IsLife = axios.create({
    BASE_URL: "https://is-life-fake-api.herokuapp.com"
});

export default IsLife;