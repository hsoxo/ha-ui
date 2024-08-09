import {config} from "../config";
import axios from "axios";

const instance = axios.create({
  baseURL: "",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
    authorization: "Bearer " + config.token,
  },
});

export default instance;