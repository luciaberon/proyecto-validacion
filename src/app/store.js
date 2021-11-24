import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthReducer from '../features/auth/authSlice';

const reducer = combineReducers({
  auth: AuthReducer
})
  
const store = configureStore({
  reducer:reducer
});

export default store;