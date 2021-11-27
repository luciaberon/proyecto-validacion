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

export default function NavBar() {
  const [isLargerThan414] = useMediaQuery();

  return (
    <Flex
      direction={isLargerThan414 ? "row" : "column"}
      mb={20}
      maxW="70vw"
      justify="space-between"
    >
      <Link href="/">
        <IconButton colorScheme="teal" icon={<AiOutlineHome />}></IconButton>
      </Link>

      <Box
        display="flex"
        direction={isLargerThan414 ? "row" : "column"}
        mt={isLargerThan414 ? "0" : "5"}
      >
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
