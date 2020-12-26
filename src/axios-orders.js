import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-c9afd.firebaseio.com/",
});

export default instance;
