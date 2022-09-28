import axios from "axios";
let http = axios.create({
    baseURL: 'http://203.187.171.233:8003'
})
export default http