import axios from 'axios';

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}


// AUTH SERVICES: LOGIN, REGISTER AND LOGOUT
export const login = async (data) => {
    const response = await axios.post('validacion-desarrollo.herokuapp.com/api/auth/login', data, {
        headers: headers,
    })  

    if (response.data.token) {
        localStorage.setItem('user',response.data.token)
    }
}

export const logout = () => {
    localStorage.removeItem('user')
}


export const register = data => {
    console.log("Data",data);
    axios.post('validacion-desarrollo.herokuapp.com/api/auth/register', data)
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