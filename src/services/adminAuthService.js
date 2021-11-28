import http from '../utils/config/axios.config';

// validate user
export const validateUser = (username) => {
    return http.post('/panel/validate', username);
}

// request user data
export const getUserData = (email) => {
    return http.get('/getuserdataurl');
}

export const getAllUsers = () => {
    return http.get('/panel/users');
}