import React from "react";
import {
  Button,
  Flex,
  Link,
} from "@chakra-ui/react";
import { logout } from '../features/auth/authSlice';
import ThemeToggleButton from "../components/theme-toggle-button";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { checkLogged } from '../features/auth/authSlice';

export default function NavBar() {
  const dispatch = useDispatch()
  let history = useHistory();
  const isLogged = useSelector(state => state.auth.isLoggedIn);

  console.log("isLogged = ",isLogged);

  const logoutAcc = () => {
    dispatch(logout());
    history.push('/iniciarsesion');
  } 

  return (
    <Flex
      mb={20}
      justify="center"
      wrap="wrap"
    > 
        { isLogged ||
        <>
        <Link onClick={() => history.push('/iniciarsesion')}>
          <Button m={2} colorScheme="teal">
            Inicia Sesión
          </Button>
        </Link>
        <Link onClick={() => history.push('/')}>
          <Button  m={2} colorScheme="teal">Registrate</Button>
        </Link>
        </> 
        }

        { isLogged &&        
        <Link onClick={logoutAcc}>
          <Button m={2} colorScheme="red">Salir</Button>
        </Link>
        }

        <ThemeToggleButton  />
    </Flex>
  );
}
