import React from "react";
import { Flex, Heading, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

export default function NotFound() {
  return (
    <Flex
      w="60vw"
      display="flex"
      direction="column"
      align="center"
      justify="center"
    >
      <Heading as="h1" size="xl">
        404
      </Heading>
      <Heading as="h2" size="md" align="center">
        Lo sentimos, no hemos podido encontrar la pagina que estabas buscando.
      </Heading>
      <Link href="/">
        <Button mt={6} colorScheme="teal">
          Volver
        </Button>
      </Link>
    </Flex>
  );
}
