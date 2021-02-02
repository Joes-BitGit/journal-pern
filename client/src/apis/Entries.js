import axios from 'axios';


// Config
const baseURL = "http://localhost:5000/api/v1/entries";

export default axios.create({
  baseURL
})