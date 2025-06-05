import axios from "axios";

// Localhost
let domain = "http://localhost:5001/";

const instance = axios.create({
  baseURL: domain + "toyfort/api",
});

const baseUrl = () => {
  return domain;
}

export default instance;
export {
  baseUrl
}