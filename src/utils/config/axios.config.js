import axios from "axios";


// axios config for api requests
const URL = "https://validacion-desarrollo.herokuapp.com/api/";


export default axios.create({
  baseURL: URL,
  headers: {
     'Authorization': `Bearer ${localStorage.getItem('user')}`
  }
});