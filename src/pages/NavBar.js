import React from "react";
import {
  Button,
  Flex,
  Link,
} from "@chakra-ui/react";
import ThemeToggleButton from "../components/theme-toggle-button";
import { useHistory } from 'react-router-dom';

export default function NavBar() {
  let history = useHistory();

  return (
    <Flex
      mb={20}
      justify="center"
      wrap="wrap"
    >
        <Link onClick={() => history.push('/iniciarsesion')}>
          <Button m={2} colorScheme="teal">
            Inicia Sesión
          </Button>
        </Link>
        <Link onClick={() => history.push('/')}>
          <Button  m={2} colorScheme="teal">Registrate</Button>
        </Link>

        <Link onClick={() => history.push('/')}>
          <Button m={2} colorScheme="red">Salir</Button>
        </Link>
        <ThemeToggleButton  />
    </Flex>
  );
}
