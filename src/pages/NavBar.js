import React from "react";
import { Box, Button, Flex, Link, IconButton } from "@chakra-ui/react";
import ThemeToggleButton from "../components/theme-toggle-button";
import { AiOutlineHome } from "react-icons/ai";

export default function NavBar() {
  return (
    <Flex mb={20} maxW="70vw" justify="space-between">
      <Link href="/">
        <IconButton colorScheme="teal" icon={<AiOutlineHome />}></IconButton>
      </Link>

      <Box>
        <Link href="/iniciarsesion">
          <Button mr={6} colorScheme="teal">
            Inicia Sesión
          </Button>
        </Link>
        <Link href="/">
          <Button colorScheme="teal">Registrate</Button>
        </Link>
        <ThemeToggleButton />
      </Box>
    </Flex>
  );
}
