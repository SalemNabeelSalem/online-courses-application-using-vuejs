import axios from "axios";

export default axios.create({
    baseURL: "localhost:8383/api/v1/",
  
    headers: {
        "Content-type": "application/json"
    }
});