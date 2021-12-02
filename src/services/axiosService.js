import http from '../utils/config/axios.config';


export const uploadPhotos = (photos) => {
    return http.post(`/onboarding/photos/${localStorage.getItem('username')}`,photos)
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