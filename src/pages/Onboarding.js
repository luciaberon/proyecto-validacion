import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { login } from '../features/auth/authSlice';
import axios from 'axios';

const Onboarding = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false)
 
    const setLogin = () => {
        setShow(true)
        dispatch(login({username:localStorage.getItem('username'),
                        password: localStorage.getItem('password')}))
        console.log("login done, redirect")
        history.push('/validacion');
    }


    return (
        <div>
            { show && <h1>LOGGED</h1>}
            <h2>PÁGINA ONBOARDING</h2>
            <button onClick={setLogin}>VALIDAR IDENTIDAD</button>
        </div>
    );
}

export default Onboarding;
