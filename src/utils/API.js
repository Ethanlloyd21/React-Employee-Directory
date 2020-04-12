import axios from 'axios';
const BASEURL = `https://randomuser.me/api/?nat=us&results=100`;

export default {
    search() {
        return axios.get(BASEURL);
    },
};