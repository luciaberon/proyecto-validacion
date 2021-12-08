import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React, {useEffect} from "react";
import QRCode from "react-qr-code";

export default function Validation() {

    const username = localStorage.getItem('username');
    const token = localStorage.getItem('user');
    const name = localStorage.getItem('name');
    const QRURL = `https://luciaberon.github.io/proyecto-validacion/#/validarusuario/${username}/${token}`;
    return (
      <Flex direction="column" align="center">

        <Text mt={6}>
          Escanee el siguiente código QR con su teléfono para continuar:
        </Text>
        <Box mt={6}>
          <QRCode value={QRURL} />
        </Box>
        <Text mt={6}>
¿Tiene problemas para acceder? </Text>
<Text>Puede continuar desde su ordenador aquí: </Text>
<a href={QRURL}>
<Button mt={6} colorScheme="teal">Continuar</Button>   </a>
      </Flex>
  );
}
