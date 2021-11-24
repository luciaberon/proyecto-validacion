import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Container, Button, Flex } from "@chakra-ui/react";
import ThemeToggleButton from "../components/theme-toggle-button";
export default function NavBar() {
  return (
    <Flex mb={20} maxW="70vw" display="flex" justify="flex-end">
      <BrowserRouter>
        <Link to="/iniciarsesion" passHref={true}>
          <Button colorScheme="teal">Inicia Sesión</Button>
          <ThemeToggleButton />
        </Link>
      </BrowserRouter>
    </Flex>
  );
}
