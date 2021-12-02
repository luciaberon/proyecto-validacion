import axios from 'axios';

const headers = {
    'Access-Control-Allow-Origin': '*',
}


// AUTH SERVICES: LOGIN, REGISTER AND LOGOUT
export const login = async (data) => {
    console.log(data)
    console.log(headers)
    const response = await axios.post('https://validacion-desarrollo.herokuapp.com/api/auth/login/', data);  

    if (response.data.token) {
        localStorage.setItem('user',response.data.token);
        localStorage.setItem('username', data.username);
    }
}

export const logout = () => {
    localStorage.clear();
}


export const register = data => {
    console.log("Data",data);
    axios.post('https://validacion-desarrollo.herokuapp.com/api/auth/register/', data)
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