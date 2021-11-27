import http from '../utils/config/axios.config';

// validate user
export const validateUser = (username) => {
    return http.post('/panel/validate');
}

// login admin user
export const loginAdmin = (data) => {
    return http.post('/login/adminURL')
}

// request user data
export const getUserData = (email) => {
    return http.get('/getuserdataurl')
}