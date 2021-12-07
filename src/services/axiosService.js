import http from '../utils/config/axios.config';
import axios from 'axios';


let config = axios.create({
    baseURL: 'https://validacion-desarrollo.herokuapp.com/api',
    headers: { 
      'accept': 'application/json', 
      'Authorization': `Bearer ${localStorage.getItem('user')}`, 
    },
});


export const uploadPhotos = (firstPic,secondPic) => {
    let data = new FormData();
    data.append('photo1', firstPic);
    data.append('photo2', secondPic);
    console.log("token from uplado photos:",localStorage.getItem('user'))
    return config.put(`/onboarding/photos/${localStorage.getItem('username')}`,data)

}

export const getUser = () => {
    return http.get(`/onboarding/users/${localStorage.getItem('username')}`);
}

// http.interceptors.request.use(function (config) {
//     let token = localStorage.getItem('user')

//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`
//     }
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// });