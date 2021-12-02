import http from '../utils/config/axios.config';


export const uploadPhotos = (photos) => {
    return http.put(`/onboarding/photos/${localStorage.getItem('username')}`,photos);
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