import axios from 'axios';

const headers = {
    'Content-Type': 'application/json',
}


// AUTH SERVICES: LOGIN, REGISTER AND LOGOUT
export const login = async (data) => {
    console.log(data)
    console.log(headers)
    const response = await axios.post('//validacion-desarrollo.herokuapp.com/api/auth/login', data);  

    if (response.data.token) {
        localStorage.setItem('user',response.data.token);
        localStorage.setItem('username',response.data.token);
    }
}

export const logout = () => {
    localStorage.removeItem('user')
}


export const register = data => {
    console.log("Data",data);
    axios.post('https://validacion-desarrollo.herokuapp.com/api/auth/register', {
        headers:headers},
        data)
}

// Authentication service
export const authService = {
    register,
    login,
    logout,
};

// http.interceptors.request.use(function (config) {
//     let token = localStorage.getItem('user')

//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`
//     }
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// });