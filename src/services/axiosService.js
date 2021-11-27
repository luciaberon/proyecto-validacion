import http from '../utils/config/axios.config';

// upload images for validation
export const uploadImages = (data) => {
    return http.post('/onboarding/dni');
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