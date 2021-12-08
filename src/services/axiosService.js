import http from '../utils/config/axios.config';
import axios from 'axios';


let config = axios.create({
    baseURL: 'https://validacion-desarrollo.herokuapp.com/api',
    headers: { 
      'accept': 'application/json', 
      'Authorization': `Bearer ${localStorage.getItem('user')}`, 
    },
});


export const uploadPhotos = async(firstPic,secondPic,username,token) => {
    let data = new FormData();
    data.append('photo1', firstPic);
    data.append('photo2', secondPic);
    console.log("token from uplado photos:",localStorage.getItem('user'))
    console.log("username uplado", username)
    console.log("tokeeeen uplado", token)

    const res = await axios.put(`https://validacion-desarrollo.herokuapp.com/api/onboarding/photos/${username}`,data, {
        headers: {
            'accept': 'application/json', 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return res;

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