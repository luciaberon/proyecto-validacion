import React from "react";
import {
  Box,
  Button,
  Flex,
  Link,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import ThemeToggleButton from "../components/theme-toggle-button";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [isLargerThan414] = useMediaQuery();
  let navigate = useNavigate();

  return (
    <Flex
      direction={isLargerThan414 ? "row" : "column"}
      mb={20}
      maxW="70vw"
      justify="space-between"
    >
      <Link onClick={() => navigate('/', {replace: true})}>
        <IconButton colorScheme="teal" icon={<AiOutlineHome />}></IconButton>
      </Link>

      <Box
        display="flex"
        direction={isLargerThan414 ? "row" : "column"}
        
        mt={isLargerThan414 ? "0" : "5"}
      >
        <Link onClick={() => navigate('/iniciarsesion', { replace: true })}>
          <Button mr={6} colorScheme="teal">
            Inicia Sesión
          </Button>
        </Link>
        <Link onClick={() => navigate('/', {replace: true})}>
          <Button colorScheme="teal">Registrate</Button>
        </Link>
        <ThemeToggleButton />
      </Box>
    </Flex>
  );
}
