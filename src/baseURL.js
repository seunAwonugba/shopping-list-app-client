import axios from "axios";

const service = axios.create({
    baseURL: "http://localhost:8002/api/v1",

});

export default service;